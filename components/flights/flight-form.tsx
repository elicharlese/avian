"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Mock flight data for editing
const mockFlight = {
  id: "FL-1001",
  flightNumber: "AV101",
  origin: "New York",
  destination: "Los Angeles",
  departureDate: new Date("2025-06-15"),
  departureTime: "09:00",
  arrivalDate: new Date("2025-06-15"),
  arrivalTime: "12:30",
  status: "scheduled",
  aircraft: "Gulfstream G650",
  capacity: 12,
  package: "Day Flyer",
  notes: "VIP clients onboard. Extra catering requested.",
}

export function FlightForm({ id }: { id?: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const isEditing = !!id

  // Initialize form state with mock data if editing
  const [formData, setFormData] = useState(
    isEditing
      ? mockFlight
      : {
          flightNumber: "",
          origin: "",
          destination: "",
          departureDate: new Date(),
          departureTime: "",
          arrivalDate: new Date(),
          arrivalTime: "",
          status: "scheduled",
          aircraft: "",
          capacity: 0,
          package: "",
          notes: "",
        },
  )

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the data to your API
    console.log("Submitting flight data:", formData)

    toast({
      title: isEditing ? "Flight updated" : "Flight created",
      description: `Flight ${formData.flightNumber} has been ${isEditing ? "updated" : "created"} successfully.`,
    })

    // Redirect back to flights list
    router.push("/dashboard/flights")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="flightNumber">Flight Number</Label>
                <Input
                  id="flightNumber"
                  value={formData.flightNumber}
                  onChange={(e) => handleChange("flightNumber", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="origin">Origin</Label>
                <Input
                  id="origin"
                  value={formData.origin}
                  onChange={(e) => handleChange("origin", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  value={formData.destination}
                  onChange={(e) => handleChange("destination", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.departureDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.departureDate ? format(formData.departureDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.departureDate}
                      onSelect={(date) => handleChange("departureDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="departureTime">Departure Time</Label>
                <Input
                  id="departureTime"
                  type="time"
                  value={formData.departureTime}
                  onChange={(e) => handleChange("departureTime", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Arrival Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.arrivalDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.arrivalDate ? format(formData.arrivalDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.arrivalDate}
                      onSelect={(date) => handleChange("arrivalDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="arrivalTime">Arrival Time</Label>
                <Input
                  id="arrivalTime"
                  type="time"
                  value={formData.arrivalTime}
                  onChange={(e) => handleChange("arrivalTime", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aircraft">Aircraft</Label>
                <Select value={formData.aircraft} onValueChange={(value) => handleChange("aircraft", value)}>
                  <SelectTrigger id="aircraft">
                    <SelectValue placeholder="Select aircraft" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Gulfstream G650">Gulfstream G650</SelectItem>
                    <SelectItem value="Bombardier Global 7500">Bombardier Global 7500</SelectItem>
                    <SelectItem value="Dassault Falcon 8X">Dassault Falcon 8X</SelectItem>
                    <SelectItem value="Embraer Praetor 600">Embraer Praetor 600</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  min="1"
                  value={formData.capacity}
                  onChange={(e) => handleChange("capacity", Number.parseInt(e.target.value))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="package">Package</Label>
                <Select value={formData.package} onValueChange={(value) => handleChange("package", value)}>
                  <SelectTrigger id="package">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Day Flyer">Day Flyer</SelectItem>
                    <SelectItem value="Sky Sleeper">Sky Sleeper</SelectItem>
                    <SelectItem value="Cloud Explorer">Cloud Explorer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">{isEditing ? "Update Flight" : "Create Flight"}</Button>
        </div>
      </div>
    </form>
  )
}
