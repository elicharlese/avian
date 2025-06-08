"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"
import { useState } from "react"

type TripStatus = "completed" | "upcoming" | "cancelled"

type Trip = {
  id: string
  destination: string
  origin: string
  departureDate: string
  returnDate: string
  status: TripStatus
  flightNumber: string
  price: string
}

export function TravelHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<TripStatus | "all">("all")

  const trips: Trip[] = [
    {
      id: "trip-1",
      destination: "Paris, France",
      origin: "New York, USA",
      departureDate: "2023-10-15",
      returnDate: "2023-10-22",
      status: "completed",
      flightNumber: "AV1234",
      price: "$1,250.00",
    },
    {
      id: "trip-2",
      destination: "Tokyo, Japan",
      origin: "Los Angeles, USA",
      departureDate: "2023-12-05",
      returnDate: "2023-12-15",
      status: "completed",
      flightNumber: "AV5678",
      price: "$1,850.00",
    },
    {
      id: "trip-3",
      destination: "London, UK",
      origin: "Chicago, USA",
      departureDate: "2024-02-10",
      returnDate: "2024-02-17",
      status: "cancelled",
      flightNumber: "AV9012",
      price: "$980.00",
    },
    {
      id: "trip-4",
      destination: "Sydney, Australia",
      origin: "San Francisco, USA",
      departureDate: "2024-06-20",
      returnDate: "2024-07-05",
      status: "upcoming",
      flightNumber: "AV3456",
      price: "$2,200.00",
    },
    {
      id: "trip-5",
      destination: "Rome, Italy",
      origin: "Miami, USA",
      departureDate: "2024-08-12",
      returnDate: "2024-08-22",
      status: "upcoming",
      flightNumber: "AV7890",
      price: "$1,450.00",
    },
  ]

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch =
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || trip.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: TripStatus) => {
    switch (status) {
      case "completed":
        return "success"
      case "upcoming":
        return "default"
      case "cancelled":
        return "destructive"
      default:
        return "default"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  // Calculate statistics
  const totalTrips = trips.length
  const completedTrips = trips.filter((trip) => trip.status === "completed").length
  const upcomingTrips = trips.filter((trip) => trip.status === "upcoming").length
  const uniqueDestinations = new Set(trips.map((trip) => trip.destination.split(",")[0].trim())).size

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Travel Statistics</CardTitle>
          <CardDescription>Summary of your travel activity with AVIAN.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Total Flights</div>
              <div className="mt-1 flex items-center">
                <Icons.plane className="mr-1 h-4 w-4 text-primary" />
                <span className="text-2xl font-bold">{totalTrips}</span>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Cities Visited</div>
              <div className="mt-1 flex items-center">
                <Icons.mapPin className="mr-1 h-4 w-4 text-primary" />
                <span className="text-2xl font-bold">{uniqueDestinations}</span>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Distance Flown</div>
              <div className="mt-1 flex items-center">
                <Icons.route className="mr-1 h-4 w-4 text-primary" />
                <span className="text-2xl font-bold">42,500</span>
                <span className="ml-1 text-sm text-muted-foreground">miles</span>
              </div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Loyalty Points</div>
              <div className="mt-1 flex items-center">
                <Icons.star className="mr-1 h-4 w-4 text-primary" />
                <span className="text-2xl font-bold">12,350</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Travel History</CardTitle>
          <CardDescription>View your past and upcoming trips with AVIAN.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <div className="flex flex-col items-center justify-between gap-4 pb-4 md:flex-row">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="calendar" disabled>
                  Calendar View
                </TabsTrigger>
              </TabsList>

              <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
                <div className="flex items-center gap-2">
                  <select
                    className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as TripStatus | "all")}
                  >
                    <option value="all">All Trips</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="relative">
                  <Icons.search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search trips..."
                    className="w-full pl-8 md:w-[200px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <TabsContent value="list" className="m-0">
              <div className="space-y-4">
                {filteredTrips.length > 0 ? (
                  filteredTrips.map((trip) => (
                    <div key={trip.id} className="flex flex-col justify-between rounded-lg border p-4 sm:flex-row">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">
                            {trip.origin} to {trip.destination}
                          </h3>
                          <Badge variant={getStatusColor(trip.status) as any}>
                            {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                          <div className="flex items-center gap-1">
                            <Icons.calendar className="h-3.5 w-3.5" />
                            <span>
                              {formatDate(trip.departureDate)} - {formatDate(trip.returnDate)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icons.plane className="h-3.5 w-3.5" />
                            <span>Flight {trip.flightNumber}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icons.dollarSign className="h-3.5 w-3.5" />
                            <span>{trip.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 sm:mt-0">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {trip.status === "upcoming" && (
                          <Button variant="outline" size="sm">
                            Manage
                          </Button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex h-32 flex-col items-center justify-center rounded-lg border">
                    <Icons.search className="mb-2 h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">No trips found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="m-0">
              <div className="flex h-64 items-center justify-center rounded-lg border">
                <p className="text-muted-foreground">Calendar view coming soon.</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
