"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Have questions about AVIAN? We're here to help you take your travel experience to new heights.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              {isSubmitted ? (
                <Card className="p-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-green-600">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="Booking Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="I'm interested in booking a Sky Sleeper package..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo icon={<Mail />} title="Email Us">
                  <a href="mailto:info@aviantravel.com" className="text-primary hover:underline">
                    info@aviantravel.com
                  </a>
                </ContactInfo>

                <ContactInfo icon={<Phone />} title="Call Us">
                  <a href="tel:+15551234567" className="text-primary hover:underline">
                    +1 (555) 123-4567
                  </a>
                </ContactInfo>

                <ContactInfo icon={<MapPin />} title="Visit Us">
                  <address className="not-italic">
                    AVIAN Headquarters
                    <br />
                    1234 Sky Avenue
                    <br />
                    Cloud City, CA 90210
                  </address>
                </ContactInfo>

                <ContactInfo icon={<Clock />} title="Business Hours">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </ContactInfo>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold">Our Location</h3>
                <div className="h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-muted-foreground">Map placeholder - would integrate Google Maps here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl text-left">
            <div className="space-y-8">
              <FAQ
                question="How can I book an AVIAN experience?"
                answer="You can book directly through our website by visiting the Booking page, or contact our customer service team by phone or email for personalized assistance."
              />
              <FAQ
                question="What is your cancellation policy?"
                answer="Bookings can be canceled up to 72 hours before departure for a full refund. Cancellations within 72 hours are subject to a 50% fee."
              />
              <FAQ
                question="Do you offer corporate packages?"
                answer="Yes, we offer special corporate packages for business travel and team events. Please contact our sales team for customized solutions."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 font-bold">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-bold">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}
