import type React from "react"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNav />
      <main className="flex min-h-screen flex-col">{children}</main>
      <Footer />
      <CookieConsent />
    </>
  )
}
