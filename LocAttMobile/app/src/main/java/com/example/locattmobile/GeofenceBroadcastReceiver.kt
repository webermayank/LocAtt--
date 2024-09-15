package com.example.locattmobile

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log
import com.google.android.gms.location.Geofence
import com.google.android.gms.location.GeofencingEvent
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.POST

class GeofenceBroadcastReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        val geofencingEvent = GeofencingEvent.fromIntent(intent)
        if (geofencingEvent.hasError()) {
            return
        }

        val geofenceTransition = geofencingEvent.geofenceTransition
        if (geofenceTransition == Geofence.GEOFENCE_TRANSITION_ENTER ||
            geofenceTransition == Geofence.GEOFENCE_TRANSITION_EXIT) {
            val triggeringGeofences = geofencingEvent.triggeringGeofences
            val transitionDetails = getGeofenceTransitionDetails(triggeringGeofences)
            sendGeofenceEventToBackend(context, geofenceTransition, geofencingEvent.triggeringLocation)
        }
    }

    private fun getGeofenceTransitionDetails(triggeringGeofences: List<Geofence>): String {
        val geofenceIds = triggeringGeofences.map { it.requestId }
        return "Geofence transition: ${geofenceIds.joinToString(", ")}"
    }

    private fun sendGeofenceEventToBackend(context: Context, transitionType: Int, location: Location) {
        val retrofit = Retrofit.Builder()
            .baseUrl("http://your-backend-url.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val geofenceApi = retrofit.create(GeofenceApi::class.java)
        val eventType = if (transitionType == Geofence.GEOFENCE_TRANSITION_ENTER) "enter" else "exit"
        val request = GeofenceEventRequest(userId = "user-id", latitude = location.latitude, longitude = location.longitude, eventType = eventType)

        geofenceApi.sendGeofenceEvent(request).enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Log.i("GeofenceReceiver", "Geofence event sent successfully")
                } else {
                    Log.e("GeofenceReceiver", "Failed to send geofence event: ${response.errorBody()?.string()}")
                }
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                Log.e("GeofenceReceiver", "Failed to send geofence event", t)
            }
        })
    }

    interface GeofenceApi {
        @POST("geofence-event")
        fun sendGeofenceEvent(@Body request: GeofenceEventRequest): Call<Void>
    }

    data class GeofenceEventRequest(val userId: String, val latitude: Double, val longitude: Double, val eventType: String)
}