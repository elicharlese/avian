"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Plane, Ticket, CalendarRange, Users, Settings, LogOut } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Flights",
    href: "/dashboard/flights",
    icon: Plane,
  },
  {
    title: "Tickets",
    href: "/dashboard/tickets",
    icon: Ticket,
  },
  {
    title: "Bookings",
    href: "/dashboard/bookings",
    icon: CalendarRange,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden w-64 flex-col border-r bg-white p-4 dark:bg-gray-950 md:flex">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold">
          <Plane className="h-6 w-6" />
          <span>AVIAN Admin</span>
        </Link>
      </div>
      <div className="flex-1 py-8">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "bg-gray-100 text-primary dark:bg-gray-800"
                    : "text-gray-500 dark:text-gray-400",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4">
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </nav>
  )
}
