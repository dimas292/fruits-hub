"use client"
import { useRouter } from "next/navigation"
import { ChevronLeft, Check, Clock } from "lucide-react"

export default function DeliveryStatus() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col bg-primary">
      {/* Status bar */}
      <div className="flex justify-between items-center p-2">
        <div className="text-white text-xs">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <div className="h-2 w-2 rounded-full bg-white"></div>
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center p-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-secondary bg-white rounded-xl px-3 py-1.5 text-sm mr-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Go back
        </button>
        <h1 className="text-white font-medium text-lg">Delivery Status</h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-3xl p-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-secondary font-medium">Order Taken</p>
          </div>
          <Check className="w-5 h-5 text-success" />
        </div>

        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-secondary font-medium">Order Is Being Prepared</p>
          </div>
          <Check className="w-5 h-5 text-success" />
        </div>

        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-secondary font-medium">Order Is Being Delivered</p>
            <p className="text-gray-400 text-sm">Your delivery agent is coming</p>
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="mb-6">
          <div className="w-full h-40 bg-light-gray rounded-xl overflow-hidden">
            {/* Map placeholder */}
            <div className="w-full h-full bg-light-gray flex items-center justify-center">
              <p className="text-gray-400">Map View</p>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-light-gray rounded-full flex items-center justify-center mr-4">
            <Check className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex-1">
            <p className="text-gray-400 font-medium">Order Received</p>
          </div>
          <div className="flex">
            <div className="w-2 h-2 bg-gray-300 rounded-full mx-0.5"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full mx-0.5"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full mx-0.5"></div>
          </div>
        </div>
      </div>
    </main>
  )
}

