"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { setCookie, getCookie, eraseCookie } from "@/lib/cookies"

type UserType = {
  id: string
  name: string
  email: string
  image?: string
  role?: string
  walletAddress?: string
  walletType?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  bio?: string
}

type AuthType = "email" | "oauth" | "wallet" | "demo" | null

type AuthContextType = {
  user: UserType | null
  authType: AuthType
  isAuthenticated: boolean
  isDemoMode: boolean
  login: (user: UserType, type: AuthType) => void
  logout: () => void
  toggleDemoMode: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Export with both names for backward compatibility
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null)
  const [authType, setAuthType] = useState<AuthType>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize auth state from cookies/localStorage
  useEffect(() => {
    const demoMode = getCookie("avian-demo-mode") === "true"
    setIsDemoMode(demoMode)

    const storedUser = localStorage.getItem("avian-user")
    const storedAuthType = localStorage.getItem("avian-auth-type") as AuthType

    if (storedUser && storedAuthType) {
      setUser(JSON.parse(storedUser))
      setAuthType(storedAuthType)
      setIsAuthenticated(true)
    }

    setIsInitialized(true)
  }, [])

  const login = (userData: UserType, type: AuthType) => {
    setUser(userData)
    setAuthType(type)
    setIsAuthenticated(true)

    // Store in localStorage for persistence
    localStorage.setItem("avian-user", JSON.stringify(userData))
    localStorage.setItem("avian-auth-type", type)

    // Set auth cookie for middleware
    setCookie("avian-auth", "true", 7)
  }

  const logout = () => {
    setUser(null)
    setAuthType(null)
    setIsAuthenticated(false)
    setIsDemoMode(false)

    // Clear storage
    localStorage.removeItem("avian-user")
    localStorage.removeItem("avian-auth-type")

    // Clear cookies
    eraseCookie("avian-auth")
    eraseCookie("avian-demo-mode")
  }

  const toggleDemoMode = () => {
    const newDemoMode = !isDemoMode
    setIsDemoMode(newDemoMode)

    if (newDemoMode) {
      // Set demo cookie for middleware
      setCookie("avian-demo-mode", "true", 1)

      // Set demo user if not already authenticated
      if (!isAuthenticated) {
        const demoUser = {
          id: "demo-user",
          name: "Demo User",
          email: "demo@aviantravel.com",
          image: "/diverse-avatars.png",
          role: "user",
        }
        setUser(demoUser)
        setAuthType("demo")
        setIsAuthenticated(true)

        // Store in localStorage
        localStorage.setItem("avian-user", JSON.stringify(demoUser))
        localStorage.setItem("avian-auth-type", "demo")
      }
    } else {
      // Clear demo cookie
      eraseCookie("avian-demo-mode")

      // If this was a demo user, log them out
      if (authType === "demo") {
        setUser(null)
        setAuthType(null)
        setIsAuthenticated(false)

        // Clear storage
        localStorage.removeItem("avian-user")
        localStorage.removeItem("avian-auth-type")
      }
    }
  }

  // Don't render children until we've initialized auth state
  if (!isInitialized) {
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authType,
        isAuthenticated,
        isDemoMode,
        login,
        logout,
        toggleDemoMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Add this export to maintain backward compatibility
export const AuthContextProvider = AuthProvider

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
