"use client"

import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

export default function Confirmation() {
  const router = useRouter()

  const handleTrackOrder = () => {
    router.push("/delivery-status")
  }

  const handleContinueShopping = () => {
    router.push("/home")
  }

  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-center p-6">
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2">
        <div className="text-black text-xs">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>

      {/* Success icon */}
      <div className="w-32 h-32 rounded-full border-4 border-success flex items-center justify-center mb-6">
        <Check className="w-16 h-16 text-success" />
      </div>

      <h1 className="text-2xl font-bold text-secondary mb-4">Congratulations!!!</h1>
      <p className="text-center text-dark-gray mb-8">
        Your order have been taken and
        <br />
        is being attended to
      </p>

      <button
        onClick={handleTrackOrder}
        className="w-full max-w-xs bg-primary text-white py-3 rounded-xl font-medium mb-4"
      >
        Track order
      </button>

      <button
        onClick={handleContinueShopping}
        className="w-full max-w-xs border border-primary text-primary py-3 rounded-xl font-medium"
      >
        Continue shopping
      </button>
    </main>
  )
}

