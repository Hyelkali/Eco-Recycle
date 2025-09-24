import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-sm mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-center mb-8">Eco-recyclz App</h1>

        <div className="space-y-4">
          <Link href="/schedule-pickup">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Schedule Pickup</Button>
          </Link>

          <Link href="/select-time">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Select Pickup Time</Button>
          </Link>

          <Link href="/pickup-confirmation">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Pickup Confirmation</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
