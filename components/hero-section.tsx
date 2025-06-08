import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder-y1j36.png"
          alt="Aerial view of clouds"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">AVIAN</h1>
          <p className="text-xl font-medium md:text-2xl">Take traveling into a different plane</p>
          <p className="text-lg md:text-xl">
            Stay in the sky and make as many stops as you'd like. Comfortable, affordable, and uniquely human-avian.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Book Your Flight
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
