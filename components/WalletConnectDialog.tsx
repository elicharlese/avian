"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Minimal typing for the MetaMask/EIP-1193 provider
interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
  on?: (event: string, handler: (...args: any[]) => void) => void
  removeListener?: (event: string, handler: (...args: any[]) => void) => void
}

declare global {
  interface Window {
    ethereum?: EthereumProvider
  }
}

type WalletConnectDialogProps = {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  buttonSize?: React.ComponentProps<typeof Button>["size"]
  buttonClassName?: string
}

export function WalletConnectDialog({
  buttonVariant = "outline",
  buttonSize = "sm",
  buttonClassName,
}: WalletConnectDialogProps) {
  const [open, setOpen] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const hasMetaMask = typeof window !== "undefined" && typeof window.ethereum !== "undefined"

  useEffect(() => {
    if (typeof window === "undefined" || !window.ethereum?.on) return

    const handleAccountsChanged = (accounts: unknown) => {
      if (Array.isArray(accounts) && accounts.length > 0 && typeof accounts[0] === "string") {
        setAddress(accounts[0])
      } else {
        setAddress(null)
      }
    }

    const handleChainChanged = (id: unknown) => {
      if (typeof id === "string") {
        setChainId(id)
      }
    }

    window.ethereum.on?.("accountsChanged", handleAccountsChanged)
    window.ethereum.on?.("chainChanged", handleChainChanged)

    return () => {
      window.ethereum?.removeListener?.("accountsChanged", handleAccountsChanged)
      window.ethereum?.removeListener?.("chainChanged", handleChainChanged)
    }
  }, [])

  const connectMetaMask = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      setError("MetaMask not detected. Please install the MetaMask browser extension and try again.")
      return
    }

    try {
      setIsConnecting(true)
      setError(null)
      const accounts = (await window.ethereum.request({ method: "eth_requestAccounts" })) as string[]
      const chain = (await window.ethereum.request({ method: "eth_chainId" })) as string

      if (accounts && accounts.length > 0) {
        setAddress(accounts[0])
      }
      setChainId(chain)
    } catch (err: any) {
      // 4001 = user rejected request
      if (err?.code === 4001) {
        setError("Connection request was rejected in MetaMask.")
      } else {
        setError("Unable to connect wallet. Please try again.")
      }
    } finally {
      setIsConnecting(false)
    }
  }

  const displayAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          size={buttonSize}
          className={cn(buttonClassName)}
        >
          {displayAddress}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect wallet</DialogTitle>
          <DialogDescription>
            Connect your MetaMask wallet to start a booking, manage payments, and save your traveler profile.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {!hasMetaMask && (
            <p className="text-sm text-destructive">
              MetaMask was not detected in your browser. Install the MetaMask extension and reload this page.
            </p>
          )}

          {address && (
            <div className="rounded-md border bg-muted px-3 py-2 text-sm">
              <div className="font-medium">Connected</div>
              <div className="text-xs text-muted-foreground break-all">{address}</div>
              {chainId && (
                <div className="mt-1 text-xs text-muted-foreground">Network ID: {chainId}</div>
              )}
            </div>
          )}

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button
            type="button"
            onClick={connectMetaMask}
            disabled={isConnecting || !hasMetaMask}
            className="w-full"
          >
            {isConnecting ? "Connecting..." : address ? "Reconnect MetaMask" : "Connect MetaMask"}
          </Button>
        </div>

        <DialogFooter className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            You can still browse and book without a connected wallet. We&apos;ll ask again at checkout.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
