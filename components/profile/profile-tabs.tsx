"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { PersonalInfoForm } from "./personal-info-form"
import { PreferencesForm } from "./preferences-form"
import { SecuritySettings } from "./security-settings"
import { PaymentMethods } from "./payment-methods"
import { TravelHistory } from "./travel-history"
import { useAuth } from "@/hooks/use-auth"

export function ProfileTabs() {
  const { isDemoMode } = useAuth()

  return (
    <Tabs defaultValue="personal" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
        <TabsTrigger value="history">Travel History</TabsTrigger>
      </TabsList>
      <Card className="mt-6 border-0 p-0 shadow-none">
        <TabsContent value="personal" className="m-0">
          <PersonalInfoForm readOnly={isDemoMode} />
        </TabsContent>
        <TabsContent value="preferences" className="m-0">
          <PreferencesForm readOnly={isDemoMode} />
        </TabsContent>
        <TabsContent value="security" className="m-0">
          <SecuritySettings readOnly={isDemoMode} />
        </TabsContent>
        <TabsContent value="payment" className="m-0">
          <PaymentMethods readOnly={isDemoMode} />
        </TabsContent>
        <TabsContent value="history" className="m-0">
          <TravelHistory />
        </TabsContent>
      </Card>
    </Tabs>
  )
}
