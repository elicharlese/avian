import { HeroSection } from "@/components/hero-section"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Brief Overview Section */}
      <section className="w-full bg-background py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Experience the Future of Travel</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            AVIAN takes traveling into a different plane, by adding a stay in the sky and as many stops as you'd like.
            Our trips are designed to be comfortable and affordable, making the human-experience feel avian.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/features">Explore Features</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
