"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, X } from "lucide-react"

export default function Basket() {
  const router = useRouter()
  const [items, setItems] = useState([
    { id: 1, name: "Quinoa fruit salad", quantity: 2, price: 20000 },
    { id: 2, name: "Melon fruit salad", quantity: 2, price: 20000 },
    { id: 3, name: "Tropical fruit salad", quantity: 2, price: 20000 },
  ])

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const totalPrice = items.reduce((total, item) => total + item.price, 0)

  const goToCheckout = () => {
    router.push("/checkout")
  }

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
        <h1 className="text-white font-medium text-lg">My Basket</h1>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-3xl p-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center mb-6">
            <div className="relative w-12 h-12 mr-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt={item.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex-1">
              <p className="text-secondary font-medium">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.quantity} packs</p>
            </div>
            <div className="text-secondary font-bold mr-4">₦ {item.price.toLocaleString()}</div>
            <button onClick={() => removeItem(item.id)}>
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        ))}

        <div className="mt-auto pt-6 border-t border-light-gray">
          <div className="flex justify-between mb-6">
            <span className="text-secondary font-medium">Total</span>
            <span className="text-secondary font-bold">₦ {totalPrice.toLocaleString()}</span>
          </div>

          <button onClick={goToCheckout} className="w-full bg-primary text-white py-4 rounded-xl font-medium">
            Checkout
          </button>
        </div>
      </div>
    </main>
  )
}

