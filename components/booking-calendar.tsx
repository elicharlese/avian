"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

  // Update package type if URL parameter changes
  useEffect(() => {
    if (packageParam) {
      setPackageType(packageParam)
    }
  }, [packageParam])

  const handleBooking = () => {
    // Here we would integrate with Solana for payment processing
    console.log("Booking details:", { date, packageType, passengers })
    alert("Your booking request has been submitted! We'll contact you shortly to confirm details.")
  }

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
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
              <div>
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  numberOfMonths={1}
                />
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
                  <Input id="departure" placeholder="Enter city or airport" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <Input id="destination" placeholder="Enter city or airport" />
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
