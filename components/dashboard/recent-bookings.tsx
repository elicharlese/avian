import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentBookings = [
  {
    id: "B-1234",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/customer-1.png",
    },
    package: "Sky Sleeper",
    date: "2025-06-15",
    status: "confirmed",
    amount: "$1,299",
  },
  {
    id: "B-1235",
    customer: {
      name: "Michael Chen",
      email: "m.chen@example.com",
      avatar: "/customer-2.png",
    },
    package: "Cloud Explorer",
    date: "2025-06-18",
    status: "pending",
    amount: "$2,499",
  },
  {
    id: "B-1236",
    customer: {
      name: "Elena Rodriguez",
      email: "elena@example.com",
      avatar: "/customer-3.png",
    },
    package: "Day Flyer",
    date: "2025-06-20",
    status: "confirmed",
    amount: "$499",
  },
  {
    id: "B-1237",
    customer: {
      name: "James Wilson",
      email: "jwilson@example.com",
      avatar: "/customer-4.png",
    },
    package: "Sky Sleeper",
    date: "2025-06-22",
    status: "confirmed",
    amount: "$1,299",
  },
  {
    id: "B-1238",
    customer: {
      name: "Aisha Patel",
      email: "aisha.p@example.com",
      avatar: "/customer-5.png",
    },
    package: "Cloud Explorer",
    date: "2025-06-25",
    status: "pending",
    amount: "$2,499",
  },
]

export function RecentBookings() {
  return (
    <div className="space-y-8">
      {recentBookings.map((booking) => (
        <div key={booking.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={booking.customer.avatar || "/placeholder.svg"} alt={booking.customer.name} />
            <AvatarFallback>{booking.customer.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{booking.customer.name}</p>
            <p className="text-sm text-muted-foreground">{booking.customer.email}</p>
          </div>
          <div className="ml-auto font-medium">
            <div className="flex flex-col items-end gap-1">
              <span>{booking.amount}</span>
              <Badge variant={booking.status === "confirmed" ? "default" : "outline"}>{booking.status}</Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
