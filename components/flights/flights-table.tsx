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

// Mock data for flights
const flights = [
  {
    id: "FL-1001",
    flightNumber: "AV101",
    origin: "New York",
    destination: "Los Angeles",
    departureDate: "2025-06-15",
    departureTime: "09:00 AM",
    status: "scheduled",
    aircraft: "Gulfstream G650",
    capacity: 12,
    package: "Day Flyer",
  },
  {
    id: "FL-1002",
    flightNumber: "AV102",
    origin: "Los Angeles",
    destination: "Miami",
    departureDate: "2025-06-16",
    departureTime: "10:30 AM",
    status: "scheduled",
    aircraft: "Bombardier Global 7500",
    capacity: 14,
    package: "Sky Sleeper",
  },
  {
    id: "FL-1003",
    flightNumber: "AV103",
    origin: "Chicago",
    destination: "San Francisco",
    departureDate: "2025-06-17",
    departureTime: "08:15 AM",
    status: "scheduled",
    aircraft: "Gulfstream G650",
    capacity: 12,
    package: "Day Flyer",
  },
  {
    id: "FL-1004",
    flightNumber: "AV104",
    origin: "Miami",
    destination: "New York",
    departureDate: "2025-06-18",
    departureTime: "02:45 PM",
    status: "scheduled",
    aircraft: "Bombardier Global 7500",
    capacity: 14,
    package: "Sky Sleeper",
  },
  {
    id: "FL-1005",
    flightNumber: "AV105",
    origin: "San Francisco",
    destination: "Las Vegas",
    departureDate: "2025-06-19",
    departureTime: "11:20 AM",
    status: "scheduled",
    aircraft: "Gulfstream G650",
    capacity: 12,
    package: "Day Flyer",
  },
  {
    id: "FL-1006",
    flightNumber: "AV106",
    origin: "Las Vegas",
    destination: "Chicago",
    departureDate: "2025-06-20",
    departureTime: "01:30 PM",
    status: "scheduled",
    aircraft: "Bombardier Global 7500",
    capacity: 14,
    package: "Cloud Explorer",
  },
  {
    id: "FL-1007",
    flightNumber: "AV107",
    origin: "New York",
    destination: "Toronto",
    departureDate: "2025-06-21",
    departureTime: "10:00 AM",
    status: "scheduled",
    aircraft: "Gulfstream G650",
    capacity: 12,
    package: "Day Flyer",
  },
  {
    id: "FL-1008",
    flightNumber: "AV108",
    origin: "Toronto",
    destination: "Chicago",
    departureDate: "2025-06-22",
    departureTime: "09:45 AM",
    status: "scheduled",
    aircraft: "Bombardier Global 7500",
    capacity: 14,
    package: "Sky Sleeper",
  },
]

export function FlightsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredFlights = flights.filter((flight) => {
    const matchesSearch =
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || flight.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search flights..."
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
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Flight #</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Package</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Aircraft</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFlights.map((flight) => (
              <TableRow key={flight.id}>
                <TableCell className="font-medium">{flight.flightNumber}</TableCell>
                <TableCell>
                  {flight.origin} → {flight.destination}
                </TableCell>
                <TableCell>
                  {flight.departureDate}
                  <br />
                  <span className="text-sm text-muted-foreground">{flight.departureTime}</span>
                </TableCell>
                <TableCell>{flight.package}</TableCell>
                <TableCell>
                  <Badge variant={flight.status === "scheduled" ? "outline" : "default"}>{flight.status}</Badge>
                </TableCell>
                <TableCell>
                  {flight.aircraft}
                  <br />
                  <span className="text-sm text-muted-foreground">Capacity: {flight.capacity}</span>
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
                        <Link href={`/dashboard/flights/${flight.id}`}>View details</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/flights/${flight.id}/edit`}>Edit flight</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel flight</DropdownMenuItem>
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
