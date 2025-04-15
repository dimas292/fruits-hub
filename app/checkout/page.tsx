"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function Checkout() {
  const router = useRouter()

  const [address, setAddress] = useState("10th avenue, Lekki, Lagos State")
  const [phone, setPhone] = useState("09090605708")

  const handlePayWithCard = () => {
    router.push("/payment")
  }

  const handlePayOnDelivery = () => {
    router.push("/confirmation")
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f3f1f1]">
      {/* Status bar */}
      <div className="flex justify-between items-center p-2">
        <div className="text-black text-xs">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center p-4 bg-primary">
        <button
          onClick={() => router.back()}
          className="flex items-center text-secondary bg-white rounded-xl px-3 py-1.5 text-sm mr-4"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Go back
        </button>
        <h1 className="text-white font-medium text-lg">My Basket</h1>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-secondary font-medium mb-2">Delivery address</h2>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full bg-white rounded-xl p-4 text-secondary"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-secondary font-medium mb-2">Number we can call</h2>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-white rounded-xl p-4 text-secondary"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handlePayOnDelivery}
            className="flex-1 border border-primary text-primary py-3 rounded-xl font-medium"
          >
            Pay on delivery
          </button>
          <button
            onClick={handlePayWithCard}
            className="flex-1 border border-primary text-primary py-3 rounded-xl font-medium"
          >
            Pay with card
          </button>
        </div>
      </div>
    </main>
  )
}

