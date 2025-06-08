import { TicketDetails } from "@/components/tickets/ticket-details"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TicketDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/tickets">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to tickets</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Ticket Details</h1>
      </div>

      <TicketDetails id={params.id} />
    </div>
  )
}
