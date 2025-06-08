"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Printer, Download, Trash2, CheckCircle } from "lucide-react"

// Mock ticket data
const mockTicket = {
  id: "TK-1001",
  ticketNumber: "AVT10001",
  passengerName: "Sarah Johnson",
  passengerEmail: "sarah.j@example.com",
  passengerPhone: "+1 (555) 123-4567",
  flightNumber: "AV101",
  origin: "New York",
  destination: "Los Angeles",
  departureDate: "2025-06-15",
  departureTime: "09:00 AM",
  arrivalDate: "2025-06-15",
  arrivalTime: "12:30 PM",
  seatNumber: "1A",
  status: "issued",
  bookingId: "B-1234",
  package: "Day Flyer",
  specialRequests: "Vegetarian meal, Extra legroom",
  issueDate: "2025-05-15",
  lastUpdated: "2025-05-15",
}

export function TicketDetails({ id }: { id: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)

  // In a real app, you would fetch the ticket data based on the ID
  const ticket = mockTicket

  const handleCancel = () => {
    // Here you would typically send a cancel request to your API
    console.log("Cancelling ticket:", id)

    toast({
      title: "Ticket cancelled",
      description: `Ticket ${ticket.ticketNumber} has been cancelled successfully.`,
    })

    // Close the dialog and redirect back to tickets list
    setIsCancelDialogOpen(false)
    router.push("/dashboard/tickets")
  }

  const handleCheckIn = () => {
    // Here you would typically send a check-in request to your API
    console.log("Checking in passenger for ticket:", id)

    toast({
      title: "Passenger checked in",
      description: `${ticket.passengerName} has been checked in successfully.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{ticket.ticketNumber}</h2>
            <Badge
              variant={
                ticket.status === "cancelled" ? "destructive" : ticket.status === "issued" ? "outline" : "default"
              }
            >
              {ticket.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {ticket.flightNumber} • {ticket.origin} → {ticket.destination}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Printer className="h-4 w-4" />
            <span className="sr-only">Print ticket</span>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download ticket</span>
          </Button>
          <Button variant="outline" onClick={handleCheckIn}>
            <CheckCircle className="mr-2 h-4 w-4" />
            Check In
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
                <DialogTitle>Cancel Ticket</DialogTitle>
                <DialogDescription>
                  Are you sure you want to cancel ticket {ticket.ticketNumber} for {ticket.passengerName}? This action
                  cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCancelDialogOpen(false)}>
                  Go Back
                </Button>
                <Button variant="destructive" onClick={handleCancel}>
                  Cancel Ticket
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Passenger Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Name</dt>
                <dd className="text-lg">{ticket.passengerName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                <dd className="text-lg">{ticket.passengerEmail}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
                <dd className="text-lg">{ticket.passengerPhone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Special Requests</dt>
                <dd className="text-lg">{ticket.specialRequests || "None"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Flight Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Flight Number</dt>
                <dd className="text-lg">
                  <Link href={`/dashboard/flights/FL-1001`} className="text-primary hover:underline">
                    {ticket.flightNumber}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Route</dt>
                <dd className="text-lg">
                  {ticket.origin} → {ticket.destination}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Departure</dt>
                <dd className="text-lg">
                  {ticket.departureDate} • {ticket.departureTime}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Arrival</dt>
                <dd className="text-lg">
                  {ticket.arrivalDate} • {ticket.arrivalTime}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Seat</dt>
                <dd className="text-lg">{ticket.seatNumber}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Package</dt>
                <dd className="text-lg">{ticket.package}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Booking Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Booking ID</dt>
                <dd className="text-lg">
                  <Link href={`/dashboard/bookings/${ticket.bookingId}`} className="text-primary hover:underline">
                    {ticket.bookingId}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Issue Date</dt>
                <dd className="text-lg">{ticket.issueDate}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Last Updated</dt>
                <dd className="text-lg">{ticket.lastUpdated}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
