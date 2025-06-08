"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Search } from "lucide-react"

// Mock data for bookings
const bookings = [
  {
    id: "B-1234",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
    },
    package: "Sky Sleeper",
    bookingDate: "2025-05-15",
    travelDate: "2025-06-15",
    passengers: 2,
    status: "confirmed",
    amount: "$2,598",
    paymentMethod: "Credit Card",
  },
  {
    id: "B-1235",
    customer: {
      name: "Michael Chen",
      email: "m.chen@example.com",
    },
    package: "Cloud Explorer",
    bookingDate: "2025-05-18",
    travelDate: "2025-06-18",
    passengers: 4,
    status: "confirmed",
    amount: "$9,996",
    paymentMethod: "Solana",
  },
  {
    id: "B-1236",
    customer: {
      name: "Elena Rodriguez",
      email: "elena@example.com",
    },
    package: "Day Flyer",
    bookingDate: "2025-05-20",
    travelDate: "2025-06-20",
    passengers: 1,
    status: "confirmed",
    amount: "$499",
    paymentMethod: "Credit Card",
  },
  {
    id: "B-1237",
    customer: {
      name: "James Wilson",
      email: "jwilson@example.com",
    },
    package: "Sky Sleeper",
    bookingDate: "2025-05-22",
    travelDate: "2025-06-22",
    passengers: 2,
    status: "pending",
    amount: "$2,598",
    paymentMethod: "Solana",
  },
  {
    id: "B-1238",
    customer: {
      name: "Aisha Patel",
      email: "aisha.p@example.com",
    },
    package: "Cloud Explorer",
    bookingDate: "2025-05-25",
    travelDate: "2025-06-25",
    passengers: 3,
    status: "confirmed",
    amount: "$7,497",
    paymentMethod: "Credit Card",
  },
  {
    id: "B-1239",
    customer: {
      name: "Robert Kim",
      email: "robert.k@example.com",
    },
    package: "Day Flyer",
    bookingDate: "2025-05-28",
    travelDate: "2025-06-28",
    passengers: 6,
    status: "confirmed",
    amount: "$2,994",
    paymentMethod: "Solana",
  },
  {
    id: "B-1240",
    customer: {
      name: "Olivia Martinez",
      email: "olivia.m@example.com",
    },
    package: "Sky Sleeper",
    bookingDate: "2025-05-30",
    travelDate: "2025-07-02",
    passengers: 2,
    status: "cancelled",
    amount: "$2,598",
    paymentMethod: "Credit Card",
  },
  {
    id: "B-1241",
    customer: {
      name: "Daniel Lee",
      email: "daniel.l@example.com",
    },
    package: "Cloud Explorer",
    bookingDate: "2025-06-01",
    travelDate: "2025-07-05",
    passengers: 2,
    status: "pending",
    amount: "$4,998",
    paymentMethod: "Solana",
  },
]

export function BookingsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || booking.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search bookings..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Package</TableHead>
              <TableHead>Travel Date</TableHead>
              <TableHead>Passengers</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>
                  {booking.customer.name}
                  <br />
                  <span className="text-sm text-muted-foreground">{booking.customer.email}</span>
                </TableCell>
                <TableCell>{booking.package}</TableCell>
                <TableCell>
                  {booking.travelDate}
                  <br />
                  <span className="text-sm text-muted-foreground">Booked: {booking.bookingDate}</span>
                </TableCell>
                <TableCell>{booking.passengers}</TableCell>
                <TableCell>
                  {booking.amount}
                  <br />
                  <span className="text-sm text-muted-foreground">{booking.paymentMethod}</span>
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/bookings/${booking.id}`}>View details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/bookings/${booking.id}/edit`}>Edit booking</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Send confirmation</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel booking</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
