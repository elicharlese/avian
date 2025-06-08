import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Plane } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Plane className="h-6 w-6" />
              <span className="text-xl font-bold">AVIAN</span>
            </div>
            <p className="text-gray-400">Taking travel to new heights with innovative sky experiences.</p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-400 hover:text-white">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-400 hover:text-white">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>1234 Sky Avenue</p>
              <p>Cloud City, CA 90210</p>
              <p className="mt-2">
                <Link href="mailto:info@aviantravel.com" className="hover:text-white">
                  info@aviantravel.com
                </Link>
              </p>
              <p>
                <Link href="tel:+15551234567" className="hover:text-white">
                  +1 (555) 123-4567
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AVIAN. All rights reserved.</p>
          <p className="mt-2">Powered by Solana blockchain technology.</p>
        </div>
      </div>
    </footer>
  )
}
