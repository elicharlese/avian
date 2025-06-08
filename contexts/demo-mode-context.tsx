"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { setCookie, getCookie, eraseCookie } from "@/lib/cookies"

type DemoModeContextType = {
  isDemoMode: boolean
  enableDemoMode: () => void
  disableDemoMode: () => void
  toggleDemoMode: () => void
}

const DemoModeContext = createContext<DemoModeContextType | undefined>(undefined)

export function DemoModeProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false)

  // Initialize from localStorage and cookies on mount (client-side only)
  useEffect(() => {
    const storedDemoMode = localStorage.getItem("avian-demo-mode") || getCookie("avian-demo-mode")
    if (storedDemoMode) {
      setIsDemoMode(storedDemoMode === "true")
    }
  }, [])

  const enableDemoMode = () => {
    setIsDemoMode(true)
    localStorage.setItem("avian-demo-mode", "true")
    setCookie("avian-demo-mode", "true", 1) // Set cookie to expire in 1 day
  }

  const disableDemoMode = () => {
    setIsDemoMode(false)
    localStorage.setItem("avian-demo-mode", "false")
    eraseCookie("avian-demo-mode")
  }

  const toggleDemoMode = () => {
    const newValue = !isDemoMode
    setIsDemoMode(newValue)
    localStorage.setItem("avian-demo-mode", newValue.toString())
    if (newValue) {
      setCookie("avian-demo-mode", "true", 1)
    } else {
      eraseCookie("avian-demo-mode")
    }
  }

  return (
    <DemoModeContext.Provider value={{ isDemoMode, enableDemoMode, disableDemoMode, toggleDemoMode }}>
      {children}
    </DemoModeContext.Provider>
  )
}

export function useDemoMode() {
  const context = useContext(DemoModeContext)
  if (context === undefined) {
    throw new Error("useDemoMode must be used within a DemoModeProvider")
  }
  return context
}
