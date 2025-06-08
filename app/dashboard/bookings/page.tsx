import { BookingsTable } from "@/components/bookings/bookings-table"
import { BookingsHeader } from "@/components/bookings/bookings-header"

export default function BookingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <BookingsHeader />
      <BookingsTable />
    </div>
  )
}
