"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function WalletSignUp() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [walletType, setWalletType] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  async function handleWalletConnect(type: string) {
    setIsLoading(type)

    try {
      // Here we would connect to the wallet
      // For now, we'll simulate a successful connection
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock wallet address
      const mockAddress =
        type === "Phantom"
          ? "8ZJ7UG5NLkGGFyHM2ULxRTrHG5KuKvjsAFBYxNYEHjnT"
          : type === "Solflare"
            ? "6iNrYAHGDYYGSQgZLpYLnVLjhQZTtxXXzThMrHRRKMuG"
            : "0x1234567890123456789012345678901234567890"

      setWalletConnected(true)
      setWalletAddress(mockAddress)
      setWalletType(type)

      toast({
        title: "Wallet connected",
        description: `Successfully connected to ${type}.`,
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection failed",
        description: `Failed to connect to ${type}. Please try again.`,
      })
    } finally {
      setIsLoading(null)
    }
  }

  async function handleSignUp() {
    if (!walletConnected) {
      toast({
        variant: "destructive",
        title: "Wallet not connected",
        description: "Please connect your wallet first.",
      })
      return
    }

    if (!acceptTerms) {
      toast({
        variant: "destructive",
        title: "Terms not accepted",
        description: "Please accept the terms and conditions.",
      })
      return
    }

    setIsLoading("signup")

    try {
      // Here we would register the user with their wallet
      // For now, we'll simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Account created",
        description: "Your account has been created successfully with your wallet.",
      })

      router.push("/dashboard")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "There was a problem creating your account. Please try again.",
      })
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="flex flex-col space-y-4 pt-4">
      {!walletConnected ? (
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
      ) : (
        <div className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{walletType} Connected</p>
                <p className="text-sm text-muted-foreground truncate max-w-[250px]">{walletAddress}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setWalletConnected(false)}>
                Disconnect
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name (Optional)</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading === "signup"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (Optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading === "signup"}
              />
              <p className="text-xs text-muted-foreground">
                Providing an email allows account recovery and notifications.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              />
              <Label htmlFor="acceptTerms" className="text-sm">
                I accept the{" "}
                <a href="/terms" className="text-primary underline-offset-4 hover:underline">
                  terms and conditions
                </a>
              </Label>
            </div>

            <Button className="w-full" onClick={handleSignUp} disabled={isLoading === "signup"}>
              {isLoading === "signup" && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Create Account with Wallet
            </Button>
          </div>
        </div>
      )}

      {!walletConnected && (
        <p className="text-center text-sm text-muted-foreground">
          Connect your wallet to create an account using your blockchain identity.
        </p>
      )}
    </div>
  )
}
