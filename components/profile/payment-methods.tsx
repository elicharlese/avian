"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

type PaymentMethod = {
  id: string
  type: "card" | "crypto"
  name: string
  details: string
  isDefault: boolean
  icon: keyof typeof Icons
}

export function PaymentMethods({ readOnly = false }: { readOnly?: boolean }) {
  const { toast } = useToast()
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "card-1",
      type: "card",
      name: "Visa ending in 4242",
      details: "Expires 04/2025",
      isDefault: true,
      icon: "creditCard",
    },
    {
      id: "card-2",
      type: "card",
      name: "Mastercard ending in 5555",
      details: "Expires 08/2024",
      isDefault: false,
      icon: "creditCard",
    },
    {
      id: "crypto-1",
      type: "crypto",
      name: "Solana Wallet",
      details: "sol...x4f2",
      isDefault: false,
      icon: "solana",
    },
  ])
  const [isAddingCard, setIsAddingCard] = useState(false)
  const [selectedPaymentType, setSelectedPaymentType] = useState<"card" | "crypto">("card")

  const handleSetDefault = (id: string) => {
    setPaymentMethods((methods) =>
      methods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )

    toast({
      title: "Default payment method updated",
      description: "Your default payment method has been updated successfully.",
    })
  }

  const handleRemovePaymentMethod = (id: string) => {
    setPaymentMethods((methods) => methods.filter((method) => method.id !== id))

    toast({
      title: "Payment method removed",
      description: "Your payment method has been removed successfully.",
    })
  }

  const handleAddPaymentMethod = () => {
    setIsAddingCard(true)

    // Simulate adding a payment method
    setTimeout(() => {
      setIsAddingCard(false)

      if (selectedPaymentType === "card") {
        setPaymentMethods((methods) => [
          ...methods,
          {
            id: `card-${Date.now()}`,
            type: "card",
            name: "New card ending in 1234",
            details: "Expires 12/2026",
            isDefault: false,
            icon: "creditCard",
          },
        ])
      } else {
        setPaymentMethods((methods) => [
          ...methods,
          {
            id: `crypto-${Date.now()}`,
            type: "crypto",
            name: "Ethereum Wallet",
            details: "eth...a7b9",
            isDefault: false,
            icon: "ethereum",
          },
        ])
      }

      toast({
        title: "Payment method added",
        description: "Your new payment method has been added successfully.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your payment methods for bookings and purchases.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  {method.icon === "creditCard" && <Icons.creditCard className="h-6 w-6" />}
                  {method.icon === "solana" && <Icons.solana className="h-6 w-6" />}
                  {method.icon === "ethereum" && <Icons.ethereum className="h-6 w-6" />}
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{method.name}</p>
                      {method.isDefault && (
                        <Badge variant="outline" className="text-xs">
                          Default
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{method.details}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!method.isDefault && !readOnly && (
                    <Button variant="ghost" size="sm" onClick={() => handleSetDefault(method.id)}>
                      Set Default
                    </Button>
                  )}
                  {!readOnly && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          Remove
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove payment method?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to remove this payment method? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleRemovePaymentMethod(method.id)}>
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 sm:flex-row">
          {!readOnly ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Add Payment Method</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Payment Method</DialogTitle>
                  <DialogDescription>Add a new payment method to your account.</DialogDescription>
                </DialogHeader>

                <div className="py-4">
                  <RadioGroup
                    defaultValue="card"
                    className="grid grid-cols-2 gap-4"
                    onValueChange={(value) => setSelectedPaymentType(value as "card" | "crypto")}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <Icons.creditCard className="h-4 w-4" />
                        Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="crypto" id="crypto" />
                      <Label htmlFor="crypto" className="flex items-center gap-2 cursor-pointer">
                        <Icons.wallet className="h-4 w-4" />
                        Crypto Wallet
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {selectedPaymentType === "card" && (
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>
                )}

                {selectedPaymentType === "crypto" && (
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="wallet-type">Wallet Type</Label>
                      <select
                        id="wallet-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="solana">Solana</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="bitcoin">Bitcoin</option>
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="wallet-address">Wallet Address</Label>
                      <Input id="wallet-address" placeholder="Enter your wallet address" />
                    </div>
                  </div>
                )}

                <DialogFooter>
                  <Button onClick={handleAddPaymentMethod} disabled={isAddingCard}>
                    {isAddingCard ? (
                      <>
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        Adding...
                      </>
                    ) : (
                      "Add Payment Method"
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <p className="text-sm text-muted-foreground">Payment method management is disabled in demo mode.</p>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
