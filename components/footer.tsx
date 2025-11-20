import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Plane } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Plane className="h-6 w-6" />
              <span className="text-xl font-bold">AVIAN</span>
            </div>
            <p className="text-muted-foreground">Taking travel to new heights with innovative sky experiences.</p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-muted-foreground hover:text-foreground">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-muted-foreground hover:text-foreground">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>1234 Sky Avenue</p>
              <p>Cloud City, CA 90210</p>
              <p className="mt-2">
                <Link href="mailto:info@aviantravel.com" className="hover:text-foreground">
                  info@aviantravel.com
                </Link>
              </p>
              <p>
                <Link href="tel:+15551234567" className="hover:text-foreground">
                  +1 (555) 123-4567
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AVIAN. All rights reserved.</p>
          <p className="mt-2">Powered by Solana blockchain technology.</p>
        </div>
      </div>
    </footer>
  )
}
