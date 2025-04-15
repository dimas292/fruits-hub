"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [name, setName] = useState("")

  const handleContinue = () => {
    if (step === 0) {
      setStep(1)
    } else {
      router.push("/name")
    }
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

      <div className="flex-1 flex flex-col p-6">
        {step === 0 ? (
          <>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Fruit Basket" fill className="object-contain" />
              </div>
            </div>
            <div className="mt-auto">
              <h1 className="text-2xl font-bold text-secondary mb-2">Get The Freshest Fruit Salad Combo</h1>
              <p className="text-dark-gray mb-6">
                We deliver the best and freshest fruit salad in town. Order for a combo today!!!
              </p>
              <button onClick={handleContinue} className="w-full bg-white text-primary py-4 rounded-xl font-medium">
                Let's Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full h-64">
                <Image src="/placeholder.svg?height=300&width=300" alt="Fruit Basket" fill className="object-contain" />
              </div>
            </div>
            <div className="mt-auto">
              <h1 className="text-2xl font-bold text-secondary mb-2">What is your firstname?</h1>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-6">
                <input
                  type="text"
                  placeholder="Tony"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent w-full outline-none text-secondary placeholder-secondary"
                />
              </div>
              <button onClick={handleContinue} className="w-full bg-white text-primary py-4 rounded-xl font-medium">
                Start Ordering
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

