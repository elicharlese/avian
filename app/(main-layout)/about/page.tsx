import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About AVIAN</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Transforming the way you experience travel through innovative sky journeys
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                AVIAN was founded in 2023 with a simple yet ambitious vision: to revolutionize the way people travel by
                taking the experience to new heights—literally.
              </p>
              <p className="mb-4 text-lg text-muted-foreground">
                Our founders, a team of aviation experts and travel enthusiasts, recognized that traditional air travel
                had become a means to an end rather than an experience to be enjoyed. They set out to change that by
                creating a service that makes the journey as memorable as the destination.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, AVIAN is at the forefront of luxury sky travel, offering unique experiences that combine the
                freedom of flight with the comfort of premium accommodations.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/placeholder-9rqrs.png" alt="AVIAN founders" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground">
            To provide extraordinary travel experiences that combine the excitement of flight with the comfort of luxury
            accommodations, all while minimizing environmental impact through innovative technology.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Innovation</h3>
              <p>
                We continuously push the boundaries of what's possible in air travel, leveraging cutting-edge technology
                and creative solutions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Sustainability</h3>
              <p>
                We're committed to reducing our environmental footprint through fuel-efficient aircraft and carbon
                offset programs powered by Solana blockchain.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Experience</h3>
              <p>
                We believe that travel should be more than transportation—it should be a memorable journey that enriches
                your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Meet Our Team</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TeamMember
              name="Alex Rivera"
              role="Founder & CEO"
              image="/professional-businessman-portrait.png"
              bio="Former aerospace engineer with 15 years of experience in aviation innovation."
            />
            <TeamMember
              name="Sophia Chen"
              role="Chief Operations Officer"
              image="/professional-business-woman-portrait.png"
              bio="Luxury hospitality expert who oversees our exceptional service standards."
            />
            <TeamMember
              name="Marcus Johnson"
              role="Chief Technology Officer"
              image="/placeholder-8clar.png"
              bio="Blockchain specialist leading our Solana integration and sustainable travel initiatives."
            />
            <TeamMember
              name="Leila Patel"
              role="Head of Customer Experience"
              image="/customer-service-director.png"
              bio="Travel industry veteran ensuring every AVIAN journey exceeds expectations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold">Ready to Experience AVIAN?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join us on a journey that will transform the way you think about travel. Book your first AVIAN experience
            today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function TeamMember({
  name,
  role,
  image,
  bio,
}: {
  name: string
  role: string
  image: string
  bio: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="mb-1 text-xl font-bold">{name}</h3>
      <p className="mb-2 text-primary">{role}</p>
      <p className="text-muted-foreground">{bio}</p>
    </div>
  )
}
