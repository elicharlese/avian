import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Experience the Sky?</h2>
          <p className="text-xl">Book your AVIAN journey today and transform the way you travel.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
