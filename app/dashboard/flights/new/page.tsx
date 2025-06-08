import { FlightForm } from "@/components/flights/flight-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewFlightPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/flights">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to flights</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Create New Flight</h1>
      </div>

      <FlightForm />
    </div>
  )
}
