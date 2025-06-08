"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plane, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
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
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
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
          <Button variant="outline" size="sm">
            Connect Wallet
          </Button>
          <Button size="sm">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
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
            <MobileNavLink href="/" active={pathname === "/"} onClick={toggleMobileMenu}>
              Home
            </MobileNavLink>
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
            <Button variant="outline" className="w-full justify-center">
              Connect Wallet
            </Button>
            <Button className="w-full justify-center" onClick={toggleMobileMenu}>
              <Link href="/book">Book Now</Link>
            </Button>
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
        "block px-3 py-2 text-base font-medium hover:bg-gray-50 hover:text-foreground",
        active ? "bg-gray-50 text-foreground" : "text-muted-foreground",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
