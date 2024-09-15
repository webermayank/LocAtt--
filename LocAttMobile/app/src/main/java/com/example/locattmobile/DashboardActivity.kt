package com.example.locattmobile

import android.os.Bundle
import android.util.Log
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.ListView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST

class DashboardActivity : AppCompatActivity() {

    private lateinit var geofenceStatusText: TextView
    private lateinit var markAttendanceButton: Button
    private lateinit var attendanceListView: ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        geofenceStatusText = findViewById(R.id.geofence_status)
        markAttendanceButton = findViewById(R.id.mark_attendance_button)
        attendanceListView = findViewById(R.id.attendance_list)

        markAttendanceButton.setOnClickListener {
            markAttendance()
        }

        // Load recent attendance records
        loadAttendanceRecords()
    }

    private fun markAttendance() {
        geofenceStatusText.text = "Geofence Status: Inside"

        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.1.100:5000/api/") // Replace with your local network IP address or emulator URL
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val attendanceApi = retrofit.create(AttendanceApi::class.java)
        val request = AttendanceRequest(latitude = 23.2203, longitude = 77.3005) // Replace with actual location data
        val call = attendanceApi.markAttendance(request)
        call.enqueue(object : Callback<Void> {
            override fun onResponse(call: Call<Void>, response: Response<Void>) {
                if (response.isSuccessful) {
                    Log.i("DashboardActivity", "Attendance marked successfully")
                } else {
                    Log.e("DashboardActivity", "Failed to mark attendance: ${response.errorBody()?.string()}")
                }
            }

            override fun onFailure(call: Call<Void>, t: Throwable) {
                Log.e("DashboardActivity", "Failed to mark attendance", t)
            }
        })
    }

    private fun loadAttendanceRecords() {
        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.1.100:5000/api/") // Replace with your local network IP address or emulator URL
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val attendanceApi = retrofit.create(AttendanceApi::class.java)
        val call = attendanceApi.getAttendanceRecords()
        call.enqueue(object : Callback<List<AttendanceRecord>> {
            override fun onResponse(call: Call<List<AttendanceRecord>>, response: Response<List<AttendanceRecord>>) {
                if (response.isSuccessful) {
                    val attendanceRecords = response.body() ?: emptyList()
                    val attendanceStrings = attendanceRecords.map { record ->
                        "Check-In: ${record.checkIn}, Check-Out: ${record.checkOut ?: "N/A"}, Location: (${record.location.lat}, ${record.location.lng})"
                    }
                    val adapter = ArrayAdapter(this@DashboardActivity, android.R.layout.simple_list_item_1, attendanceStrings)
                    attendanceListView.adapter = adapter
                } else {
                    Log.e("DashboardActivity", "Failed to fetch attendance records: ${response.errorBody()?.string()}")
                }
            }

            override fun onFailure(call: Call<List<AttendanceRecord>>, t: Throwable) {
                Log.e("DashboardActivity", "Failed to fetch attendance records", t)
            }
        })
    }

    interface AttendanceApi {
        @GET("attendance/records")
        fun getAttendanceRecords(): Call<List<AttendanceRecord>>

        @POST("attendance/checkin")
        fun markAttendance(@Body request: AttendanceRequest): Call<Void>
    }

    data class AttendanceRequest(val latitude: Double, val longitude: Double)
    data class AttendanceRecord(
        val checkIn: String,
        val checkOut: String?,
        val location: Location
    ) {
        data class Location(
            val lat: Double,
            val lng: Double
        )
    }
}