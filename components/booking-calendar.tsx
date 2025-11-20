"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import type { DateRange } from "react-day-picker"

export function BookingCalendar() {
  const searchParams = useSearchParams()
  const packageParam = searchParams.get("package")

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 1)),
  })
  const [packageType, setPackageType] = useState(packageParam || "")
  const [passengers, setPassengers] = useState("1")
  const [departure, setDeparture] = useState("")
  const [destination, setDestination] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const formatDate = (value: Date | undefined) => {
    if (!value) return ""
    return value.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  // Update package type if URL parameter changes
  useEffect(() => {
    if (packageParam) {
      setPackageType(packageParam)
    }
  }, [packageParam])

  const handleBooking = () => {
    if (!date?.from || !date?.to) {
      alert("Please select your travel dates.")
      return
    }

    if (!fullName || !email || !departure || !destination) {
      alert("Please complete all required fields.")
      return
    }

    if (!agreeToTerms) {
      alert("Please agree to the terms to continue.")
      return
    }

    // Here we would integrate with Solana for payment processing
    console.log("Booking details:", {
      date,
      packageType,
      passengers,
      fullName,
      email,
      phone,
      specialRequests,
    })
    alert("Your booking request has been submitted! We'll contact you shortly to confirm details.")
  }

  return (
    <section className="w-full bg-muted py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Book Your Sky Experience</h2>
          <p className="mt-4 text-xl text-muted-foreground">Select your dates and customize your journey</p>
        </div>

        <Card className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle>Flight Booking</CardTitle>
            <CardDescription>Choose your travel dates, package, and number of passengers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                  <div className="flex flex-1 flex-col rounded-md bg-card/70 px-3 py-2">
                    <span className="uppercase tracking-wide">Departure</span>
                    <span className="text-sm font-medium text-foreground">
                      {date?.from ? formatDate(date.from) : "Select date"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col rounded-md bg-card/70 px-3 py-2">
                    <span className="uppercase tracking-wide">Return</span>
                    <span className="text-sm font-medium text-foreground">
                      {date?.to ? formatDate(date.to) : "Select date"}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-card p-3 md:p-4">
                  <Calendar
                    mode="range"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                    numberOfMonths={1}
                    disabled={{ before: new Date() }}
                    showOutsideDays={false}
                  />
                </div>

                <div className="rounded-lg bg-card/60 px-3 py-2 text-sm text-muted-foreground">
                  {!date?.from && !date?.to && (
                    <span>Click a start date, then click an end date to choose your trip.</span>
                  )}
                  {date?.from && !date?.to && (
                    <span>
                      Trip start:{" "}
                      <span className="font-medium text-foreground">{formatDate(date.from)}</span>. Choose an end date to
                      complete your range.
                    </span>
                  )}
                  {date?.from && date?.to && (
                    <span>
                      Trip:{" "}
                      <span className="font-medium text-foreground">{formatDate(date.from)}</span> –{" "}
                      <span className="font-medium text-foreground">{formatDate(date.to)}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="package">Select Package</Label>
                  <Select value={packageType} onValueChange={setPackageType}>
                    <SelectTrigger id="package">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day-flyer">Day Flyer</SelectItem>
                      <SelectItem value="sky-sleeper">Sky Sleeper</SelectItem>
                      <SelectItem value="cloud-explorer">Cloud Explorer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers">Number of Passengers</Label>
                  <Select value={passengers} onValueChange={setPassengers}>
                    <SelectTrigger id="passengers">
                      <SelectValue placeholder="Select number of passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "passenger" : "passengers"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="departure">Departure Location</Label>
                  <Input
                    id="departure"
                    placeholder="Enter city or airport"
                    value={departure}
                    onChange={(event) => setDeparture(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="Enter city or airport"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Include country code if applicable"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Seat preferences, dietary needs, accessibility, or other details"
                    rows={4}
                    value={specialRequests}
                    onChange={(event) => setSpecialRequests(event.target.value)}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(!!checked)}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I confirm that the information provided is accurate and I agree to be contacted about this booking
                    request.
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleBooking} className="w-full">
              Book Now with Solana
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
