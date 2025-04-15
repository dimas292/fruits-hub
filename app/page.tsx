"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  // Simulate splash screen for 2 seconds then redirect to onboarding
  // useState(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/onboarding")
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24 mb-4">
          <Image src="/placeholder.svg?height=96&width=96" alt="Fruit Hub Logo" fill className="object-contain" />
        </div>
        <div className="bg-orange-500 rounded-lg px-6 py-2">
          <span className="text-primary font-medium text-lg">Deems store .com</span>
        </div>
      </div>
    </main>
  )
}

