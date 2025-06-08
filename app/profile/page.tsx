import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileTabs } from "@/components/profile/profile-tabs"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Profile | AVIAN",
  description: "View and manage your AVIAN account settings and preferences",
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<div className="h-24 w-full animate-pulse rounded-lg bg-muted"></div>}>
        <ProfileHeader />
      </Suspense>
      <Suspense fallback={<div className="mt-8 h-96 w-full animate-pulse rounded-lg bg-muted"></div>}>
        <ProfileTabs />
      </Suspense>
    </div>
  )
}
