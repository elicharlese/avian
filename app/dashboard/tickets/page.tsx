import { TicketsTable } from "@/components/tickets/tickets-table"
import { TicketsHeader } from "@/components/tickets/tickets-header"

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-6">
      <TicketsHeader />
      <TicketsTable />
    </div>
  )
}
