"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [errorDescription, setErrorDescription] = useState<string>("")

  useEffect(() => {
    const error = searchParams?.get("error")

    if (error) {
      switch (error) {
        case "Configuration":
          setErrorMessage("Server Error")
          setErrorDescription(
            "There is a problem with the server configuration. Please try again later or contact support.",
          )
          break
        case "AccessDenied":
          setErrorMessage("Access Denied")
          setErrorDescription("You do not have permission to sign in.")
          break
        case "Verification":
          setErrorMessage("Unable to Sign In")
          setErrorDescription(
            "The sign in link is no longer valid. It may have been used already or it may have expired.",
          )
          break
        case "OAuthSignin":
        case "OAuthCallback":
        case "OAuthCreateAccount":
        case "EmailCreateAccount":
        case "Callback":
        case "OAuthAccountNotLinked":
        case "EmailSignin":
        case "CredentialsSignin":
          setErrorMessage("Authentication Error")
          setErrorDescription("There was a problem with your authentication. Please try again.")
          break
        default:
          setErrorMessage("Unknown Error")
          setErrorDescription("An unknown error occurred. Please try again later.")
      }
    } else {
      setErrorMessage("Authentication Error")
      setErrorDescription("An error occurred during authentication. Please try again.")
    }
  }, [searchParams])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Authentication Error</CardTitle>
          <CardDescription className="text-center">
            We encountered a problem while trying to authenticate you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{errorMessage}</AlertTitle>
            <AlertDescription>{errorDescription}</AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button asChild className="w-full">
            <Link href="/auth/signin">Try Again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
