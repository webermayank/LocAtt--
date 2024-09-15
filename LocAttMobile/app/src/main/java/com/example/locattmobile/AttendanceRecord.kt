package com.example.locattmobile

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