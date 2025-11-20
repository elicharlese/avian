import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function PricingPackages() {
  return (
    <section id="pricing" className="w-full bg-background pricing-pattern py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Choose Your Sky Experience</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Select the package that best fits your travel needs and budget
          </p>
        </div>
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Day Flyer"
            price="499"
            description="Perfect for a day trip with multiple stops"
            features={[
              "Up to 8 hours of flight time",
              "3 destinations maximum",
              "Complimentary refreshments",
              "Wi-Fi and entertainment",
              "Personal flight attendant",
            ]}
            buttonText="Book Day Trip"
            packageType="day-flyer"
          />
          <PricingCard
            title="Sky Sleeper"
            price="1,299"
            description="Overnight stay with premium amenities"
            features={[
              "24 hours of flight time",
              "2 destinations maximum",
              "Overnight accommodations",
              "Full meal service",
              "Premium entertainment",
              "Dedicated crew",
            ]}
            buttonText="Book Overnight"
            packageType="sky-sleeper"
            highlighted={true}
          />
          <PricingCard
            title="Cloud Explorer"
            price="2,499"
            description="Extended journey with multiple overnight stays"
            features={[
              "72 hours of flight time",
              "5 destinations maximum",
              "Multiple overnight stays",
              "Gourmet dining experience",
              "Luxury amenities",
              "Personalized itinerary",
              "Dedicated concierge",
            ]}
            buttonText="Book Explorer Package"
            packageType="cloud-explorer"
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  packageType,
  highlighted = false,
}: {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  packageType: string
  highlighted?: boolean
}) {
  return (
    <Card
      className={`flex flex-col w-full bg-card/80 backdrop-blur-lg border border-border/60 shadow-md ${
        highlighted ? "border-primary shadow-xl" : ""
      }`}
    >
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
        <div className="mt-2">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-sm text-muted-foreground"> /person</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        <ul className="space-y-1.5 text-sm">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className={`w-full text-sm ${highlighted ? "bg-primary" : ""}`} asChild>
          <Link href={`/book?package=${packageType}`}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
