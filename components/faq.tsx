"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How does the booking process work?",
      answer:
        "Our booking process is simple. Select your preferred package, choose your travel dates using our calendar, specify the number of passengers, and enter your departure and destination locations. Once you submit your booking request, our team will contact you to confirm details and process payment via Solana.",
    },
    {
      question: "What amenities are available during flights?",
      answer:
        "Amenities vary by package but typically include comfortable seating, Wi-Fi, entertainment systems, refreshments, and meal service. Overnight packages include sleeping accommodations with premium bedding. Our Cloud Explorer package offers additional luxury amenities and personalized service.",
    },
    {
      question: "Can I customize my travel itinerary?",
      answer:
        "We pride ourselves on offering customizable travel experiences. You can add stops, extend overnight stays, and request specific amenities. Contact our concierge team after booking to discuss your personalized itinerary.",
    },
    {
      question: "How many people can travel together?",
      answer:
        "Our aircraft can accommodate up to 8 passengers, depending on the configuration and package selected. For larger groups, please contact us directly to discuss options.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Bookings can be canceled up to 72 hours before departure for a full refund. Cancellations within 72 hours are subject to a 50% fee. We understand that plans change, so please contact us if you need to reschedule.",
    },
    {
      question: "How does AVIAN use Solana blockchain technology?",
      answer:
        "We utilize Solana's blockchain for secure, efficient payment processing and to manage our carbon offset program. Our smart contracts ensure transparent transactions and help us maintain our commitment to eco-friendly travel practices.",
    },
  ]

  return (
    <section id="faq" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-muted-foreground">Everything you need to know about AVIAN</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
