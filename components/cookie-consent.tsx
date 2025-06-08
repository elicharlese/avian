"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent")
    if (!hasConsented) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setShowBanner(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 p-4 text-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold">We Value Your Privacy</h3>
            <p className="text-sm text-gray-300">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
              <Link href="/cookies" className="text-primary underline hover:text-primary/80">
                Cookie Policy
              </Link>{" "}
              to learn more.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-2">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
              onClick={acceptEssential}
            >
              Essential Only
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90" onClick={acceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
