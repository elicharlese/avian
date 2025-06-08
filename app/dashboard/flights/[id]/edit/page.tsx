import { FlightForm } from "@/components/flights/flight-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EditFlightPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/dashboard/flights/${params.id}`}>
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to flight details</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Edit Flight</h1>
      </div>

      <FlightForm id={params.id} />
    </div>
  )
}
