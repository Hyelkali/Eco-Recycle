"use client"

import { Button } from "@/components/ui/button"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function SelectTimeScreen() {
  const [selectedDay, setSelectedDay] = useState("Today")
  const [selectedTime, setSelectedTime] = useState("")

  const days = ["Today", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const times = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "8:00 AM"]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-4">
        <h1 className="text-lg font-semibold">Schedule Pickup</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Recycling Instructions */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-sm font-semibold text-green-700 mb-2">Recycling Instructions</h2>
          <p className="text-sm text-green-600">
            Separate your recyclables by type before pickup. This helps us process them more efficiently.
          </p>
        </div>

        {/* Select Pickup Time */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Pickup Time</h2>

          {/* Day Selection */}
          <div className="flex items-center space-x-2 mb-6">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
            <div className="flex space-x-2 overflow-x-auto flex-1">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex justify-around flex-col items-center gap-1 px-6 py-4 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedDay === day ? "bg-green-500 text-white" : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#01BF69"/>
                  </svg>

                  {day}
                </button>
              ))}
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-2 gap-3">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-4 rounded-lg text-sm font-medium border-2 flex items-center space-x-2 ${
                  selectedTime === time
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedTime === time ? "border-green-500 bg-green-500" : "border-gray-300"
                  }`}
                >
                  {selectedTime === time && <div className="w-full h-full rounded-full bg-white scale-50"></div>}
                </div>
                <span>{time}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Pickup Button */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3">Schedule Pickup</Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
