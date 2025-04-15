"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, Heart, Minus, Plus } from "lucide-react"

export default function Product() {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToBasket = () => {
    router.push("/basket")
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
      <div className="p-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-secondary bg-white rounded-xl px-3 py-1.5 text-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Go back
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white rounded-t-3xl p-6">
        <div className="relative w-full h-40 mb-4">
          <Image src="/placeholder.svg?height=200&width=200" alt="Quinoa Fruit Salad" fill className="object-contain" />
        </div>

        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-secondary">Quinoa Fruit Salad</h1>
          <div className="flex items-center">
            <span className="text-secondary font-bold mr-1">₦</span>
            <span className="text-secondary font-bold text-2xl">2,000</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button
              onClick={decreaseQuantity}
              className="bg-light-gray rounded-full w-8 h-8 flex items-center justify-center"
            >
              <Minus className="w-4 h-4 text-secondary" />
            </button>
            <span className="mx-4 text-secondary font-medium">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-light-gray rounded-full w-8 h-8 flex items-center justify-center"
            >
              <Plus className="w-4 h-4 text-secondary" />
            </button>
          </div>
          <Heart className="w-6 h-6 text-gray-400" />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium text-secondary mb-2">One Pack Contains:</h2>
          <p className="text-dark-gray">Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</p>
        </div>

        <div className="mb-8">
          <p className="text-dark-gray">
            If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
          </p>
        </div>

        <button onClick={addToBasket} className="w-full bg-primary text-white py-4 rounded-xl font-medium">
          Add to basket
        </button>
      </div>
    </main>
  )
}

