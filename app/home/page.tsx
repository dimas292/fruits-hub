"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, Heart, ShoppingBasket } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("hottest")

  const handleProductClick = () => {
    router.push("/product")
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
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
      <div className="flex justify-between items-center p-4">
        <div className="w-8 h-8">
          <div className="w-6 h-0.5 bg-secondary mb-1.5"></div>
          <div className="w-4 h-0.5 bg-secondary"></div>
        </div>
        <div className="relative">
          <ShoppingBasket className="text-primary" />
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h1 className="text-lg font-medium text-secondary mb-4">
          Hello Tony, What fruit salad combo do you want today?
        </h1>

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for fruit salad combos"
            className="w-full bg-light-gray rounded-xl py-3 pl-10 pr-4 text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Recommended */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-secondary mb-4">Recommended Combo</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <div className="flex-shrink-0 w-40 bg-light-gray rounded-xl p-3">
              <div className="relative h-24 w-full mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Honey lime combo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-secondary">Honey lime combo</p>
                  <p className="text-primary font-medium">₦ 2,000</p>
                </div>
                <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 w-40 bg-light-gray rounded-xl p-3">
              <div className="relative h-24 w-full mb-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Berry mango combo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-secondary">Berry mango combo</p>
                  <p className="text-primary font-medium">₦ 8,000</p>
                </div>
                <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-light-gray mb-4">
          <button
            className={`mr-6 pb-2 ${activeTab === "hottest" ? "text-secondary border-b-2 border-primary font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("hottest")}
          >
            Hottest
          </button>
          <button
            className={`mr-6 pb-2 ${activeTab === "popular" ? "text-secondary border-b-2 border-primary font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("popular")}
          >
            Popular
          </button>
          <button
            className={`mr-6 pb-2 ${activeTab === "new" ? "text-secondary border-b-2 border-primary font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("new")}
          >
            New combo
          </button>
          <button
            className={`mr-6 pb-2 ${activeTab === "top" ? "text-secondary border-b-2 border-primary font-medium" : "text-gray-400"}`}
            onClick={() => setActiveTab("top")}
          >
            Top
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-light-gray rounded-xl p-3" onClick={handleProductClick}>
            <div className="relative h-24 w-full mb-2">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Quinoa fruit salad"
                fill
                className="object-contain"
              />
              <button className="absolute top-0 right-0 p-1">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-secondary">Quinoa fruit salad</p>
                <p className="text-primary font-medium">₦ 10,000</p>
              </div>
              <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">+</button>
            </div>
          </div>

          <div className="bg-light-gray rounded-xl p-3">
            <div className="relative h-24 w-full mb-2">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Tropical fruit salad"
                fill
                className="object-contain"
              />
              <button className="absolute top-0 right-0 p-1">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-secondary">Tropical fruit salad</p>
                <p className="text-primary font-medium">₦ 10,000</p>
              </div>
              <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">+</button>
            </div>
          </div>

          <div className="bg-light-gray rounded-xl p-3">
            <div className="relative h-24 w-full mb-2">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Melon fruit salad"
                fill
                className="object-contain"
              />
              <button className="absolute top-0 right-0 p-1">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-secondary">Melon fruit salad</p>
                <p className="text-primary font-medium">₦ 10,000</p>
              </div>
              <button className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">+</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

