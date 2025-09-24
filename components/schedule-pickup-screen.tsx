import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Bold as Bottle, FileText, Wine, Settings, Monitor, Calendar, Clock, MapPin } from "lucide-react"

export function SchedulePickupScreen() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-4">
        <h1 className="text-lg font-semibold">Schedule Pickup</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* What are you recycling section */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-sm font-medium text-gray-700 mb-4">What are you recycling?</h2>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 border-2 p-1 rounded-lg flex items-center justify-center">
                <img src="/Plastic.png" alt="Plastic" />
              </div>
              <span className="text-xs text-gray-600">Plastic</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 border-2 p-1 rounded-lg flex items-center justify-center">
                <img src="Paper.png" alt="Paper" />
              </div>
              <span className="text-xs text-gray-600">Paper</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 border-2 p-1 rounded-lg flex items-center justify-center">
                <img src="Glass.png" alt="Glass" />
              </div>
              <span className="text-xs text-gray-600">Glass</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 border-2 p-1 rounded-lg flex items-center justify-center">
                <img src="Metal.png" alt="Metal" />
              </div>
              <span className="text-xs text-gray-600">Metal</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 border-2 p-1 rounded-lg flex items-center justify-center">
                <img src="Electronics.png" alt="Electronics" />
              </div>
              <span className="text-xs text-gray-600">Electronics</span>
            </div>
          </div>
        </div>

        {/* Next Pickup section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Next Pickup</h2>

          <div className="space-y-3">
            <Card className="p-4 border-l-4 border-l-green-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Pickup Date</p>
                    <p className="text-sm text-gray-600">Tomorrow, May 25</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-600">
                  Change
                </Button>
              </div>
            </Card>

            <Card className="p-4 border-l-4 border-l-green-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Pickup Time</p>
                    <p className="text-sm text-gray-600">Morning (8:00 AM - 12:00 PM)</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-600">
                  Change
                </Button>
              </div>
            </Card>

            <Card className="p-4 border-l-4 border-l-green-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Location</p>
                    <p className="text-sm text-gray-600">123 Green Street, Ecoville</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-600">
                  Change
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Select Pickup Time button */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2">
          <span>Select Pickup Time</span>
          <span>→</span>
        </Button>

        {/* Info box */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">i</span>
            </div>
            <p className="text-sm text-green-700">
              Please ensure your recyclables are clean and sorted. Our driver will arrive within the selected time
              window.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
