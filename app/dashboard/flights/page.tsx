import { FlightsTable } from "@/components/flights/flights-table"
import { FlightsHeader } from "@/components/flights/flights-header"

export default function FlightsPage() {
  return (
    <div className="flex flex-col gap-6">
      <FlightsHeader />
      <FlightsTable />
    </div>
  )
}
