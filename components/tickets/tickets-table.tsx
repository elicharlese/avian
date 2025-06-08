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

// Mock data for tickets
const tickets = [
  {
    id: "TK-1001",
    ticketNumber: "AVT10001",
    passengerName: "Sarah Johnson",
    flightNumber: "AV101",
    origin: "New York",
    destination: "Los Angeles",
    departureDate: "2025-06-15",
    departureTime: "09:00 AM",
    seatNumber: "1A",
    status: "issued",
    bookingId: "B-1234",
  },
  {
    id: "TK-1002",
    ticketNumber: "AVT10002",
    passengerName: "Michael Chen",
    flightNumber: "AV102",
    origin: "Los Angeles",
    destination: "Miami",
    departureDate: "2025-06-16",
    departureTime: "10:30 AM",
    seatNumber: "2B",
    status: "issued",
    bookingId: "B-1235",
  },
  {
    id: "TK-1003",
    ticketNumber: "AVT10003",
    passengerName: "Elena Rodriguez",
    flightNumber: "AV103",
    origin: "Chicago",
    destination: "San Francisco",
    departureDate: "2025-06-17",
    departureTime: "08:15 AM",
    seatNumber: "3C",
    status: "issued",
    bookingId: "B-1236",
  },
  {
    id: "TK-1004",
    ticketNumber: "AVT10004",
    passengerName: "James Wilson",
    flightNumber: "AV104",
    origin: "Miami",
    destination: "New York",
    departureDate: "2025-06-18",
    departureTime: "02:45 PM",
    seatNumber: "1A",
    status: "checked-in",
    bookingId: "B-1237",
  },
  {
    id: "TK-1005",
    ticketNumber: "AVT10005",
    passengerName: "Aisha Patel",
    flightNumber: "AV105",
    origin: "San Francisco",
    destination: "Las Vegas",
    departureDate: "2025-06-19",
    departureTime: "11:20 AM",
    seatNumber: "4D",
    status: "issued",
    bookingId: "B-1238",
  },
  {
    id: "TK-1006",
    ticketNumber: "AVT10006",
    passengerName: "Robert Kim",
    flightNumber: "AV106",
    origin: "Las Vegas",
    destination: "Chicago",
    departureDate: "2025-06-20",
    departureTime: "01:30 PM",
    seatNumber: "2A",
    status: "issued",
    bookingId: "B-1239",
  },
  {
    id: "TK-1007",
    ticketNumber: "AVT10007",
    passengerName: "Olivia Martinez",
    flightNumber: "AV107",
    origin: "New York",
    destination: "Toronto",
    departureDate: "2025-06-21",
    departureTime: "10:00 AM",
    seatNumber: "3B",
    status: "cancelled",
    bookingId: "B-1240",
  },
  {
    id: "TK-1008",
    ticketNumber: "AVT10008",
    passengerName: "Daniel Lee",
    flightNumber: "AV108",
    origin: "Toronto",
    destination: "Chicago",
    departureDate: "2025-06-22",
    departureTime: "09:45 AM",
    seatNumber: "1C",
    status: "issued",
    bookingId: "B-1241",
  },
]

export function TicketsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.passengerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tickets..."
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
            <SelectItem value="issued">Issued</SelectItem>
            <SelectItem value="checked-in">Checked In</SelectItem>
            <SelectItem value="boarded">Boarded</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket #</TableHead>
              <TableHead>Passenger</TableHead>
              <TableHead>Flight</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Seat</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">{ticket.ticketNumber}</TableCell>
                <TableCell>{ticket.passengerName}</TableCell>
                <TableCell>
                  {ticket.flightNumber}
                  <br />
                  <span className="text-sm text-muted-foreground">
                    {ticket.origin} → {ticket.destination}
                  </span>
                </TableCell>
                <TableCell>
                  {ticket.departureDate}
                  <br />
                  <span className="text-sm text-muted-foreground">{ticket.departureTime}</span>
                </TableCell>
                <TableCell>{ticket.seatNumber}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      ticket.status === "cancelled" ? "destructive" : ticket.status === "issued" ? "outline" : "default"
                    }
                  >
                    {ticket.status}
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
                        <Link href={`/dashboard/tickets/${ticket.id}`}>View details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Check in passenger</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel ticket</DropdownMenuItem>
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
