"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Plane, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { WalletConnectDialog } from "@/components/WalletConnectDialog"

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const [quickPackage, setQuickPackage] = useState("")
  const [quickPassengers, setQuickPassengers] = useState("1")
  const [quickDate, setQuickDate] = useState("")
  const [quickTime, setQuickTime] = useState("")

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleQuickBook = () => {
    // Require at least a package and date to be chosen
    if (!quickPackage || !quickDate) {
      alert("Please choose a package and date to book.")
      return
    }

    const params = new URLSearchParams()
    params.set("package", quickPackage)
    if (quickPassengers) params.set("passengers", quickPassengers)
    if (quickDate) params.set("date", quickDate)
    if (quickTime) params.set("time", quickTime)

    router.push(`/book?${params.toString()}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AVIAN</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6 lg:gap-10">
          <NavLink href="/about" active={pathname === "/about"}>
            About Us
          </NavLink>
          <NavLink href="/pricing" active={pathname === "/pricing"}>
            Packages
          </NavLink>
          <NavLink href="/book" active={pathname === "/book"}>
            Book
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <WalletConnectDialog />
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Quick booking</DialogTitle>
                <DialogDescription>
                  Book a sky experience in a few steps. You can refine all details on the next screen.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="quick-package">Select package</Label>
                  <Select value={quickPackage} onValueChange={setQuickPackage}>
                    <SelectTrigger id="quick-package">
                      <SelectValue placeholder="Choose a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day-flyer">Day Flyer</SelectItem>
                      <SelectItem value="sky-sleeper">Sky Sleeper</SelectItem>
                      <SelectItem value="cloud-explorer">Cloud Explorer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quick-date">Preferred date</Label>
                  <Input
                    id="quick-date"
                    type="date"
                    value={quickDate}
                    onChange={(event) => setQuickDate(event.target.value)}
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="quick-time">Time of day</Label>
                    <Select value={quickTime} onValueChange={setQuickTime}>
                      <SelectTrigger id="quick-time">
                        <SelectValue placeholder="Any time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any time</SelectItem>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quick-passengers">Passengers</Label>
                    <Select value={quickPassengers} onValueChange={setQuickPassengers}>
                      <SelectTrigger id="quick-passengers">
                        <SelectValue placeholder="1 passenger" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "passenger" : "passengers"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-between">
                <Button className="w-full sm:w-auto" onClick={handleQuickBook}>
                  Book now
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/book">Go to full booking</Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 border-b bg-background md:hidden",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <div className="container space-y-4 py-4">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/about" active={pathname === "/about"} onClick={toggleMobileMenu}>
              About Us
            </MobileNavLink>
            <MobileNavLink href="/pricing" active={pathname === "/pricing"} onClick={toggleMobileMenu}>
              Packages
            </MobileNavLink>
            <MobileNavLink href="/book" active={pathname === "/book"} onClick={toggleMobileMenu}>
              Book
            </MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === "/contact"} onClick={toggleMobileMenu}>
              Contact
            </MobileNavLink>
          </nav>
          <div className="flex flex-col gap-2">
            <WalletConnectDialog buttonVariant="outline" buttonClassName="w-full justify-center" />
            <Button className="w-full justify-center" onClick={toggleMobileMenu}>
              <Link href="/book">Book Now</Link>
            </Button>
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground",
        active ? "text-foreground" : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active?: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block px-3 py-2 text-base font-medium hover:bg-accent hover:text-foreground",
        active ? "bg-accent text-foreground" : "text-muted-foreground",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
