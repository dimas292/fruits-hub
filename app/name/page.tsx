"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NameInput() {
  const router = useRouter()
  const [name, setName] = useState("")

  const handleSubmit = () => {
    if (name.trim()) {
      router.push("/home")
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
          <button onClick={handleSubmit} className="w-full bg-white text-primary py-4 rounded-xl font-medium">
            Start Ordering
          </button>
        </div>
      </div>
    </main>
  )
}

