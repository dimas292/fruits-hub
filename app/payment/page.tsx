"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, X } from "lucide-react"

export default function Payment() {
  const router = useRouter()
  const [cardHolder, setCardHolder] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")

  const handleCompleteOrder = () => {
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
        <div className="relative mb-6">
          <div className="absolute top-4 right-4">
            <X className="w-5 h-5 text-gray-400" />
          </div>
          <div className="bg-white rounded-xl p-6 pt-12">
            <div className="mb-6">
              <h2 className="text-secondary font-medium mb-2">Card Holders Name</h2>
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                placeholder="Adolphus Chris"
                className="w-full bg-light-gray rounded-xl p-4 text-secondary"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-secondary font-medium mb-2">Card Number</h2>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 1314"
                className="w-full bg-light-gray rounded-xl p-4 text-secondary"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <h2 className="text-secondary font-medium mb-2">Date</h2>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="10/30"
                  className="w-full bg-light-gray rounded-xl p-4 text-secondary"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-secondary font-medium mb-2">CCV</h2>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="123"
                  className="w-full bg-light-gray rounded-xl p-4 text-secondary"
                />
              </div>
            </div>

            <button onClick={handleCompleteOrder} className="w-full bg-primary text-white py-4 rounded-xl font-medium">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

