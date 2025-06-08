"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type WalletContextType = {
  connected: boolean
  connecting: boolean
  walletAddress: string | null
  walletType: string | null
  connect: (walletType: string) => Promise<void>
  disconnect: () => void
  signMessage: (message: string) => Promise<string | null>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [walletType, setWalletType] = useState<string | null>(null)

  // Check if wallet is already connected on mount
  useEffect(() => {
    const checkWalletConnection = async () => {
      // Check localStorage or other persistent storage for wallet connection
      const savedWalletType = localStorage.getItem("walletType")
      const savedWalletAddress = localStorage.getItem("walletAddress")

      if (savedWalletType && savedWalletAddress) {
        // Verify the connection is still valid
        try {
          // This would be replaced with actual wallet connection verification
          // For now, we'll just simulate a successful connection
          setWalletType(savedWalletType)
          setWalletAddress(savedWalletAddress)
          setConnected(true)
        } catch (error) {
          console.error("Failed to reconnect wallet:", error)
          localStorage.removeItem("walletType")
          localStorage.removeItem("walletAddress")
        }
      }
    }

    checkWalletConnection()
  }, [])

  const connect = async (type: string) => {
    setConnecting(true)

    try {
      // Here we would connect to the actual wallet
      // For now, we'll simulate a successful connection
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock wallet address based on wallet type
      const mockAddress =
        type === "Phantom"
          ? "8ZJ7UG5NLkGGFyHM2ULxRTrHG5KuKvjsAFBYxNYEHjnT"
          : type === "Solflare"
            ? "6iNrYAHGDYYGSQgZLpYLnVLjhQZTtxXXzThMrHRRKMuG"
            : "0x1234567890123456789012345678901234567890"

      setWalletType(type)
      setWalletAddress(mockAddress)
      setConnected(true)

      // Save connection info
      localStorage.setItem("walletType", type)
      localStorage.setItem("walletAddress", mockAddress)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      throw error
    } finally {
      setConnecting(false)
    }
  }

  const disconnect = () => {
    // Here we would disconnect from the actual wallet
    setWalletType(null)
    setWalletAddress(null)
    setConnected(false)

    // Clear saved connection info
    localStorage.removeItem("walletType")
    localStorage.removeItem("walletAddress")
  }

  const signMessage = async (message: string): Promise<string | null> => {
    if (!connected || !walletType) {
      throw new Error("Wallet not connected")
    }

    try {
      // Here we would sign the message with the actual wallet
      // For now, we'll simulate a successful signature
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Mock signature
      return `${walletAddress?.substring(0, 10)}...signed:${message.substring(0, 10)}`
    } catch (error) {
      console.error("Failed to sign message:", error)
      return null
    }
  }

  return (
    <WalletContext.Provider
      value={{
        connected,
        connecting,
        walletAddress,
        walletType,
        connect,
        disconnect,
        signMessage,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
