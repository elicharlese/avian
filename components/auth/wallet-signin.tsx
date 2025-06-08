"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { Card } from "@/components/ui/card"

export function WalletSignIn() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<string | null>(null)

  async function handleWalletConnect(walletType: string) {
    setIsLoading(walletType)

    try {
      // Here we would connect to the wallet and authenticate
      // For now, we'll simulate a successful connection
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Wallet connected",
        description: `Successfully authenticated with ${walletType}.`,
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection failed",
        description: `Failed to connect to ${walletType}. Please try again.`,
      })
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="flex flex-col space-y-4 pt-4">
      <div className="grid grid-cols-1 gap-4">
        <Card className="p-4">
          <Button
            variant="outline"
            type="button"
            disabled={!!isLoading}
            onClick={() => handleWalletConnect("Phantom")}
            className="w-full"
          >
            {isLoading === "Phantom" ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.phantom className="mr-2 h-4 w-4" />
            )}
            Connect with Phantom
          </Button>
        </Card>
        <Card className="p-4">
          <Button
            variant="outline"
            type="button"
            disabled={!!isLoading}
            onClick={() => handleWalletConnect("Solflare")}
            className="w-full"
          >
            {isLoading === "Solflare" ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.solflare className="mr-2 h-4 w-4" />
            )}
            Connect with Solflare
          </Button>
        </Card>
        <Card className="p-4">
          <Button
            variant="outline"
            type="button"
            disabled={!!isLoading}
            onClick={() => handleWalletConnect("MetaMask")}
            className="w-full"
          >
            {isLoading === "MetaMask" ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.metamask className="mr-2 h-4 w-4" />
            )}
            Connect with MetaMask
          </Button>
        </Card>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Connect your wallet to sign in securely using your blockchain identity.
      </p>
    </div>
  )
}
