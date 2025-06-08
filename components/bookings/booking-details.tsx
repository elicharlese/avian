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
import { Pencil, Trash2, Send, Ticket, CreditCard } from "lucide-react"

// Mock booking data
const mockBooking = {
  id: "B-1234",
  customer: {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
  },
  package: "Sky Sleeper",
  bookingDate: "2025-05-15",
  travelDate: "2025-06-15",
  returnDate: "2025-06-16",
  passengers: [
    { name: "Sarah Johnson", email: "sarah.j@example.com", type: "Adult" },
    { name: "Mark Johnson", email: "mark.j@example.com", type: "Adult" },
  ],
  flights: [
    {
      id: "FL-1001",
      flightNumber: "AV101",
      origin: "New York",
      destination: "Los Angeles",
      departureDate: "2025-06-15",
      departureTime: "09:00 AM",
      arrivalDate: "2025-06-15",
      arrivalTime: "12:30 PM",
    },
    {
      id: "FL-1004",
      flightNumber: "AV104",
      origin: "Los Angeles",
      destination: "New York",
      departureDate: "2025-06-16",
      departureTime: "02:45 PM",
      arrivalDate: "2025-06-16",
      arrivalTime: "10:15 PM",
    },
  ],
  tickets: [
    { id: "TK-1001", ticketNumber: "AVT10001", passengerName: "Sarah Johnson", status: "issued" },
    { id: "TK-1002", ticketNumber: "AVT10002", passengerName: "Mark Johnson", status: "issued" },
  ],
  status: "confirmed",
  amount: "$2,598",
  paymentMethod: "Credit Card",
  paymentStatus: "paid",
  specialRequests: "Window seats preferred. Vegetarian meal for Sarah.",
  notes: "VIP clients. Complimentary champagne on arrival.",
}

export function BookingDetails({ id }: { id: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)

  // In a real app, you would fetch the booking data based on the ID
  const booking = mockBooking

  const handleCancel = () => {
    // Here you would typically send a cancel request to your API
    console.log("Cancelling booking:", id)

    toast({
      title: "Booking cancelled",
      description: `Booking ${booking.id} has been cancelled successfully.`,
    })

    // Close the dialog and redirect back to bookings list
    setIsCancelDialogOpen(false)
    router.push("/dashboard/bookings")
  }

  const handleSendConfirmation = () => {
    // Here you would typically send a confirmation email
    console.log("Sending confirmation for booking:", id)

    toast({
      title: "Confirmation sent",
      description: `Booking confirmation has been sent to ${booking.customer.email}.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{booking.id}</h2>
            <Badge
              variant={
                booking.status === "cancelled" ? "destructive" : booking.status === "pending" ? "outline" : "default"
              }
            >
              {booking.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {booking.package} • {booking.passengers.length} passengers
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSendConfirmation}>
            <Send className="mr-2 h-4 w-4" />
            Send Confirmation
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/dashboard/bookings/${id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <Dialog open={isCancelDialogOpen} onOpenChange={setIsCancelDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cancel Booking</DialogTitle>
                <DialogDescription>
                  Are you sure you want to cancel booking {booking.id} for {booking.customer.name}? This will also
                  cancel all associated tickets.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCancelDialogOpen(false)}>
                  Go Back
                </Button>
                <Button variant="destructive" onClick={handleCancel}>
                  Cancel Booking
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Booking Details</TabsTrigger>
          <TabsTrigger value="flights">Flights</TabsTrigger>
          <TabsTrigger value="tickets">
            <Ticket className="mr-2 h-4 w-4" />
            Tickets
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="mr-2 h-4 w-4" />
            Payment
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Name</dt>
                  <dd className="text-lg">{booking.customer.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd className="text-lg">{booking.customer.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
                  <dd className="text-lg">{booking.customer.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Address</dt>
                  <dd className="text-lg">{booking.customer.address}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Package</dt>
                  <dd className="text-lg">{booking.package}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Booking Date</dt>
                  <dd className="text-lg">{booking.bookingDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Travel Date</dt>
                  <dd className="text-lg">{booking.travelDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Return Date</dt>
                  <dd className="text-lg">{booking.returnDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                  <dd className="text-lg">
                    <Badge
                      variant={
                        booking.status === "cancelled"
                          ? "destructive"
                          : booking.status === "pending"
                            ? "outline"
                            : "default"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Amount</dt>
                  <dd className="text-lg">{booking.amount}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Passengers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {booking.passengers.map((passenger, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">{passenger.name}</h4>
                      <p className="text-sm text-muted-foreground">{passenger.email}</p>
                    </div>
                    <Badge>{passenger.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Special Requests</dt>
                  <dd className="text-lg">{booking.specialRequests || "None"}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Notes</dt>
                  <dd className="text-lg">{booking.notes || "None"}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flights" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Flight Itinerary</CardTitle>
              <CardDescription>All flights included in this booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {booking.flights.map((flight, index) => (
                  <div key={flight.id} className="rounded-lg border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">
                        <Link href={`/dashboard/flights/${flight.id}`} className="text-primary hover:underline">
                          {flight.flightNumber}
                        </Link>
                      </h3>
                      <Badge variant="outline">{index === 0 ? "Outbound" : "Return"}</Badge>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Departure</p>
                        <p>
                          {flight.departureDate} • {flight.departureTime}
                          <br />
                          <span className="text-sm text-muted-foreground">{flight.origin}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Arrival</p>
                        <p>
                          {flight.arrivalDate} • {flight.arrivalTime}
                          <br />
                          <span className="text-sm text-muted-foreground">{flight.destination}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Tickets</CardTitle>
              <CardDescription>All tickets issued for this booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {booking.tickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-medium">
                        <Link href={`/dashboard/tickets/${ticket.id}`} className="text-primary hover:underline">
                          {ticket.ticketNumber}
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground">{ticket.passengerName}</p>
                    </div>
                    <Badge
                      variant={
                        ticket.status === "cancelled"
                          ? "destructive"
                          : ticket.status === "issued"
                            ? "outline"
                            : "default"
                      }
                    >
                      {ticket.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Amount</dt>
                  <dd className="text-lg">{booking.amount}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Payment Method</dt>
                  <dd className="text-lg">{booking.paymentMethod}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Payment Status</dt>
                  <dd className="text-lg">
                    <Badge
                      variant={
                        booking.paymentStatus === "paid"
                          ? "default"
                          : booking.paymentStatus === "refunded"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {booking.paymentStatus}
                    </Badge>
                  </dd>
                </div>
                {booking.paymentMethod === "Solana" && (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <dt className="text-sm font-medium text-muted-foreground">Transaction Hash</dt>
                    <dd className="break-all text-sm font-mono">
                      5UygmPG8ysxG5QYYoZ1YfEAKj1dCXWxbLDGwMKiyTMp4UGjKLiVdmJQZnW1J6vwKK8THhMKyJ4VXp7C2WxHkxmcv
                    </dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
