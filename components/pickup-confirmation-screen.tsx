"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { ChevronLeft, Camera} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function PickupConfirmationScreen() {
  const [checkedItems, setCheckedItems] = useState({
    matches: false,
    sorted: false,
    hazardous: false,
  })

  const handleCheckboxChange = (item: keyof typeof checkedItems) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <Link href={"/"}>
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-800">Pickup Confirmation</h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex items-center justify-around space-x-4">
          <div className="flex items-center space-x-5">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-col gap-1">
              <svg width="32" height="5" viewBox="0 0 32 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="5" rx="2.5" fill="#01BF69"/>
              </svg>
              <span className="text-xs font-medium text-green-600">Accept</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
           <div className="w-6 h-6 rounded-full flex items-center justify-center flex-col gap-1">
              <svg width="32" height="5" viewBox="0 0 32 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="5" rx="2.5" fill="#01BF69"/>
              </svg>
              <span className="text-xs font-medium text-green-600">Nevigate</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-col gap-1">
              <svg width="32" height="5" viewBox="0 0 32 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="5" rx="2.5" fill="#01BF69"/>
              </svg>
              <span className="text-xs font-medium text-green-600">Pickup</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-col gap-1">
              <svg width="32" height="5" viewBox="0 0 32 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="5" rx="2.5" fill="#616161" fill-opacity="0.5"/>
              </svg>
              <span className="text-xs font-medium text-green-950">Deliver</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-col gap-1">
              <svg width="32" height="5" viewBox="0 0 32 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="5" rx="2.5" fill="#616161" fill-opacity="0.5"/>
              </svg>
              <span className="text-xs font-medium text-green-950">Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Verify Waste Collection */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Verify Waste Collection</h2>

          {/* Camera Section */}
          <Card className="p-6 border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-66 h-66 bg-gray-200 rounded-lg flex items-center justify-center flex-col">
                <Camera className="w-20 h-22 text-gray-400" />
                <p className="text-sm text-gray-600 text-center">Take Photo of Waste</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Expected Items */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">Expected:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Plastic Bottles (5kg)</li>
            <li>• Paper (2kg)</li>
          </ul>
        </div>

        {/* Verification Checklist */}
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={checkedItems.matches}
              onChange={() => handleCheckboxChange("matches")}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="text-sm text-gray-700">Waste matches description</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={checkedItems.sorted}
              onChange={() => handleCheckboxChange("sorted")}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="text-sm text-gray-700">Items properly sorted</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={checkedItems.hazardous}
              onChange={() => handleCheckboxChange("hazardous")}
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="text-sm text-gray-700">No hazardous materials</span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <Button variant="destructive" className="flex-1 bg-red-500 hover:bg-red-600 text-white">
            Report Issue
          </Button>
          <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">Confirm Pickup</Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
