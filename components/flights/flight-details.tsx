"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { Pencil, Trash2, Users, CalendarRange } from "lucide-react"
import { format } from "date-fns"

// Mock flight data
const mockFlight = {
  id: "FL-1001",
  flightNumber: "AV101",
  origin: "New York",
  destination: "Los Angeles",
  departureDate: new Date("2025-06-15"),
  departureTime: "09:00 AM",
  arrivalDate: new Date("2025-06-15"),
  arrivalTime: "12:30 PM",
  status: "scheduled",
  aircraft: "Gulfstream G650",
  capacity: 12,
  package: "Day Flyer",
  notes: "VIP clients onboard. Extra catering requested.",
  crew: [
    { id: "C-101", name: "Captain John Smith", role: "Pilot", experience: "15 years" },
    { id: "C-102", name: "First Officer Sarah Lee", role: "Co-Pilot", experience: "8 years" },
    { id: "C-103", name: "Emily Chen", role: "Flight Attendant", experience: "5 years" },
  ],
  passengers: [
    { id: "P-101", name: "Michael Johnson", email: "michael@example.com", status: "confirmed" },
    { id: "P-102", name: "Jessica Williams", email: "jessica@example.com", status: "confirmed" },
    { id: "P-103", name: "David Brown", email: "david@example.com", status: "pending" },
  ],
}

// Mock bookings associated with this flight
const mockBookings = [
  {
    id: "B-1234",
    customer: "Sarah Johnson",
    package: "Day Flyer",
    bookingDate: "2025-05-15",
    passengers: 2,
    status: "confirmed",
    amount: "$998",
  },
  {
    id: "B-1235",
    customer: "Michael Chen",
    package: "Day Flyer",
    bookingDate: "2025-05-18",
    passengers: 1,
    status: "confirmed",
    amount: "$499",
  },
]

export function FlightDetails({ id }: { id: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // In a real app, you would fetch the flight data based on the ID
  const flight = mockFlight
  const bookings = mockBookings

  const handleDelete = () => {
    // Here you would typically send a delete request to your API
    console.log("Deleting flight:", id)

    toast({
      title: "Flight deleted",
      description: `Flight ${flight.flightNumber} has been deleted successfully.`,
    })

    // Close the dialog and redirect back to flights list
    setIsDeleteDialogOpen(false)
    router.push("/dashboard/flights")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{flight.flightNumber}</h2>
            <Badge variant={flight.status === "scheduled" ? "outline" : "default"}>{flight.status}</Badge>
          </div>
          <p className="text-muted-foreground">
            {flight.origin} → {flight.destination}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/flights/${id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Flight</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete flight {flight.flightNumber}? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Flight Details</TabsTrigger>
          <TabsTrigger value="passengers">
            <Users className="mr-2 h-4 w-4" />
            Passengers & Crew
          </TabsTrigger>
          <TabsTrigger value="bookings">
            <CalendarRange className="mr-2 h-4 w-4" />
            Bookings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Flight Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Origin</dt>
                  <dd className="text-lg">{flight.origin}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Destination</dt>
                  <dd className="text-lg">{flight.destination}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Package</dt>
                  <dd className="text-lg">{flight.package}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Departure</dt>
                  <dd className="text-lg">
                    {format(flight.departureDate, "PPP")}
                    <br />
                    <span className="text-base text-muted-foreground">{flight.departureTime}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Arrival</dt>
                  <dd className="text-lg">
                    {format(flight.arrivalDate, "PPP")}
                    <br />
                    <span className="text-base text-muted-foreground">{flight.arrivalTime}</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Aircraft</dt>
                  <dd className="text-lg">{flight.aircraft}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Capacity</dt>
                  <dd className="text-lg">{flight.capacity} passengers</dd>
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <dt className="text-sm font-medium text-muted-foreground">Notes</dt>
                  <dd className="text-base">{flight.notes || "No notes available."}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="passengers" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Crew Members</CardTitle>
              <CardDescription>Flight crew assigned to this flight</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flight.crew.map((member) => (
                  <div key={member.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{member.experience}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Passengers</CardTitle>
              <CardDescription>Passengers booked on this flight</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flight.passengers.map((passenger) => (
                  <div key={passenger.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">{passenger.name}</h4>
                      <p className="text-sm text-muted-foreground">{passenger.email}</p>
                    </div>
                    <Badge variant={passenger.status === "confirmed" ? "default" : "outline"}>{passenger.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Associated Bookings</CardTitle>
              <CardDescription>Bookings that include this flight</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">
                        <Link href={`/dashboard/bookings/${booking.id}`} className="text-primary hover:underline">
                          {booking.id}
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {booking.customer} • {booking.passengers}{" "}
                        {booking.passengers === 1 ? "passenger" : "passengers"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div>{booking.amount}</div>
                      <Badge variant={booking.status === "confirmed" ? "default" : "outline"}>{booking.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
