import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

export function BookingsHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
      <Button asChild>
        <Link href="/dashboard/bookings/new">
          <Plus className="mr-2 h-4 w-4" />
          Create New Booking
        </Link>
      </Button>
    </div>
  )
}
