"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"
import { Pencil, Trash2, Mail, CalendarRange } from "lucide-react"

// Mock user data
const mockUser = {
  id: "U-1001",
  name: "Sarah Johnson",
  email: "sarah.j@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, New York, NY 10001",
  status: "active",
  role: "customer",
  joinDate: "2025-01-15",
  lastLogin: "2025-05-18",
  avatar: "/customer-1.png",
  preferences: {
    seatPreference: "Window",
    mealPreference: "Vegetarian",
    communicationPreferences: ["Email", "SMS"],
  },
  bookings: [
    {
      id: "B-1234",
      package: "Sky Sleeper",
      travelDate: "2025-06-15",
      status: "confirmed",
      amount: "$2,598",
    },
    {
      id: "B-1235",
      package: "Day Flyer",
      travelDate: "2025-07-10",
      status: "confirmed",
      amount: "$499",
    },
    {
      id: "B-1236",
      package: "Cloud Explorer",
      travelDate: "2025-08-05",
      status: "pending",
      amount: "$2,499",
    },
  ],
  paymentMethods: [
    {
      id: "PM-1001",
      type: "Credit Card",
      last4: "4242",
      expiryDate: "05/28",
      isDefault: true,
    },
    {
      id: "PM-1002",
      type: "Solana Wallet",
      address: "8ZJ7UG5N...",
      isDefault: false,
    },
  ],
}

export function UserProfile({ id }: { id: string }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false)

  // In a real app, you would fetch the user data based on the ID
  const user = mockUser

  const handleDeactivate = () => {
    // Here you would typically send a deactivate request to your API
    console.log("Deactivating user:", id)

    toast({
      title: "User deactivated",
      description: `${user.name}'s account has been deactivated.`,
    })

    // Close the dialog and redirect back to users list
    setIsDeactivateDialogOpen(false)
    router.push("/dashboard/users")
  }

  const handleSendMessage = () => {
    // Here you would typically open a message composer or send a notification
    console.log("Sending message to user:", id)

    toast({
      title: "Message sent",
      description: `Your message has been sent to ${user.email}.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <Badge variant={user.status === "active" ? "default" : "secondary"} className="capitalize">
                {user.status}
              </Badge>
            </div>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSendMessage}>
            <Mail className="mr-2 h-4 w-4" />
            Message
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/dashboard/users/${id}/edit`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <Dialog open={isDeactivateDialogOpen} onOpenChange={setIsDeactivateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Deactivate
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Deactivate User</DialogTitle>
                <DialogDescription>
                  Are you sure you want to deactivate {user.name}'s account? They will no longer be able to log in or
                  make bookings.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeactivateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDeactivate}>
                  Deactivate
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="bookings">
            <CalendarRange className="mr-2 h-4 w-4" />
            Bookings
          </TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Full Name</dt>
                  <dd className="text-lg">{user.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd className="text-lg">{user.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Phone</dt>
                  <dd className="text-lg">{user.phone}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Address</dt>
                  <dd className="text-lg">{user.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Join Date</dt>
                  <dd className="text-lg">{user.joinDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Last Login</dt>
                  <dd className="text-lg">{user.lastLogin}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Role</dt>
                  <dd className="text-lg capitalize">{user.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Status</dt>
                  <dd className="text-lg capitalize">{user.status}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Seat Preference</dt>
                  <dd className="text-lg">{user.preferences.seatPreference}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Meal Preference</dt>
                  <dd className="text-lg">{user.preferences.mealPreference}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-muted-foreground">Communication Preferences</dt>
                  <dd className="flex gap-2 pt-1">
                    {user.preferences.communicationPreferences.map((pref) => (
                      <Badge key={pref} variant="outline">
                        {pref}
                      </Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>All bookings made by this user</CardDescription>
            </CardHeader>
            <CardContent>
              {user.bookings.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-left">
                        <th className="px-4 py-2">Booking ID</th>
                        <th className="px-4 py-2">Package</th>
                        <th className="px-4 py-2">Travel Date</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.bookings.map((booking) => (
                        <tr key={booking.id} className="border-t">
                          <td className="px-4 py-2">{booking.id}</td>
                          <td className="px-4 py-2">{booking.package}</td>
                          <td className="px-4 py-2">{booking.travelDate}</td>
                          <td className="px-4 py-2">
                            <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                              {booking.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-2">{booking.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No bookings found for this user.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>All payment methods associated with this user</CardDescription>
            </CardHeader>
            <CardContent>
              {user.paymentMethods.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-left">
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Details</th>
                        <th className="px-4 py-2">Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.paymentMethods.map((paymentMethod) => (
                        <tr key={paymentMethod.id} className="border-t">
                          <td className="px-4 py-2">{paymentMethod.type}</td>
                          <td className="px-4 py-2">
                            {paymentMethod.type === "Credit Card"
                              ? `**** **** **** ${paymentMethod.last4} (Expires ${paymentMethod.expiryDate})`
                              : paymentMethod.address}
                          </td>
                          <td className="px-4 py-2">{paymentMethod.isDefault ? "Yes" : "No"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No payment methods found for this user.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
