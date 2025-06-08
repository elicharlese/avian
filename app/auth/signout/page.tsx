"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignOutPage() {
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    await signOut({ redirect: false })
    router.push("/")
  }

  const handleCancel = () => {
    router.back()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Sign Out</CardTitle>
          <CardDescription className="text-center">Are you sure you want to sign out of your account?</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <LogOut className="h-16 w-16 text-gray-400" />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button onClick={handleSignOut} disabled={isSigningOut} className="w-full">
            {isSigningOut ? "Signing Out..." : "Sign Out"}
          </Button>
          <Button onClick={handleCancel} variant="outline" className="w-full">
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
