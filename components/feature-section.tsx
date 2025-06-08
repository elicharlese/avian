import type React from "react"
import { FuelIcon as GasPump, Plane, Hotel, Users } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="features" className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Experience Flight Like Never Before
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<GasPump className="h-10 w-10 text-primary" />}
            title="Eco-Friendly Travel"
            description="Using gas-efficient methods of travel to reduce environmental impact through smart contracts."
          />
          <FeatureCard
            icon={<Plane className="h-10 w-10 text-primary" />}
            title="Customized Journeys"
            description="Prioritizing customization and practical applications of travel for your unique needs."
          />
          <FeatureCard
            icon={<Hotel className="h-10 w-10 text-primary" />}
            title="Sky Accommodations"
            description="Stay overnight in the clouds in the comfort of a private plane with all the amenities of a hotel."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-primary" />}
            title="Shared Experiences"
            description="Share the plane with a party or pick them up along the way for a social travel experience."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
