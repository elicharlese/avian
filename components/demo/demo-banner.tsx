"use client"

import { useAuth } from "@/contexts/auth-context"
import { AlertCircle } from "lucide-react"

export function DemoBanner() {
  const { isDemoMode, toggleDemoMode } = useAuth()

  if (!isDemoMode) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black py-2 px-4 flex items-center justify-between z-50">
      <div className="flex items-center space-x-2">
        <AlertCircle className="h-5 w-5" />
        <span className="font-medium">Demo Mode Active: Using sample data</span>
      </div>
      <button
        onClick={toggleDemoMode}
        className="bg-black text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800 transition-colors"
      >
        Disable
      </button>
    </div>
  )
}
