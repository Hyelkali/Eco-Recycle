import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    // <div className="min-h-screen bg-background p-4">
    //   <div className="max-w-sm mx-auto space-y-4">
    //     <h1 className="text-2xl font-bold text-center mb-8">Eco-recyclz App</h1>

    //     <div className="space-y-4">
    //       <Link href="/schedule-pickup">
    //         <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Schedule Pickup</Button>
    //       </Link>

    //       <Link href="/select-time">
    //         <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Select Pickup Time</Button>
    //       </Link>

    //       <Link href="/pickup-confirmation">
    //         <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Pickup Confirmation</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex items-center justify-center p-4">
          <div className="max-w-sm mx-auto space-y-10">
            <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-10">
              Eco-recyclz App
            </h1>

            <div className="space-x-12">
              <Link href="/schedule-pickup">
                <div className="group relative glass-card p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 drop-shadow-md">
                    Schedule Pickup
                  </span>
                </div>
              </Link>

              <Link href="/select-time">
                <div className="group relative glass-card p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-green-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 drop-shadow-md">
                    Select Pickup Time
                  </span>
                </div>
              </Link>

              <Link href="/pickup-confirmation">
                <div className="group relative glass-card p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 drop-shadow-md">
                    Pickup Confirmation
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
  )
}
