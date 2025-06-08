import type React from "react"
import Image from "next/image"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">How AVIAN Works</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:items-center">
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image src="/placeholder-rtvta.png" alt="Luxury private jet interior" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <Step number={1} title="Choose Your Package">
              Select from our range of flight packages based on your travel needs and preferences.
            </Step>
            <Step number={2} title="Schedule Your Flight">
              Use our intuitive calendar system to book your preferred dates and destinations.
            </Step>
            <Step number={3} title="Customize Your Experience">
              Add overnight stays, multiple stops, and select amenities to personalize your journey.
            </Step>
            <Step number={4} title="Take Flight">
              Arrive at your departure location and enjoy a seamless, comfortable sky travel experience.
            </Step>
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}
