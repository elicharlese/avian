import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">What Our Flyers Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Sarah Johnson"
            role="Business Executive"
            image="/professional-woman-portrait.png"
            quote="The Sky Sleeper package transformed my business travel. I arrived refreshed and ready for my meetings after a comfortable night in the clouds."
            rating={5}
          />
          <TestimonialCard
            name="Michael Chen"
            role="Travel Enthusiast"
            image="/smiling-asian-man.png"
            quote="Cloud Explorer gave my family the vacation of a lifetime. The ability to visit multiple destinations without the hassle of airports was incredible."
            rating={5}
          />
          <TestimonialCard
            name="Elena Rodriguez"
            role="Luxury Travel Blogger"
            image="/latina-woman-portrait.png"
            quote="As someone who's experienced luxury travel worldwide, AVIAN stands out for its innovative approach and exceptional service."
            rating={4}
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  role,
  image,
  quote,
  rating,
}: {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}) {
  return (
    <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="mb-4 flex-1 italic">"{quote}"</p>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "fill-primary text-primary" : "text-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
