"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    flights: 12,
    bookings: 18,
  },
  {
    name: "Feb",
    flights: 15,
    bookings: 22,
  },
  {
    name: "Mar",
    flights: 18,
    bookings: 26,
  },
  {
    name: "Apr",
    flights: 22,
    bookings: 32,
  },
  {
    name: "May",
    flights: 28,
    bookings: 38,
  },
  {
    name: "Jun",
    flights: 32,
    bookings: 42,
  },
  {
    name: "Jul",
    flights: 38,
    bookings: 48,
  },
  {
    name: "Aug",
    flights: 42,
    bookings: 52,
  },
  {
    name: "Sep",
    flights: 38,
    bookings: 48,
  },
  {
    name: "Oct",
    flights: 32,
    bookings: 42,
  },
  {
    name: "Nov",
    flights: 28,
    bookings: 36,
  },
  {
    name: "Dec",
    flights: 24,
    bookings: 32,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="flights" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="bookings" fill="#22c55e" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
