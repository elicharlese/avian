"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface OAuthSignInProps {
  isSignUp?: boolean
}

export function OAuthSignIn({ isSignUp = false }: OAuthSignInProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  async function handleGoogleSignIn() {
    setIsLoading(true)

    try {
      await signIn("google", { callbackUrl: "/dashboard" })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "There was a problem signing in with Google.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col space-y-4 pt-4">
      <Button variant="outline" type="button" disabled={isLoading} onClick={handleGoogleSignIn} className="w-full">
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        {isSignUp ? "Sign up with Google" : "Sign in with Google"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        {isSignUp
          ? "By signing up, you agree to our Terms of Service and Privacy Policy."
          : "This is a secure sign in method using your Google account."}
      </p>
    </div>
  )
}
