"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export function DemoModeToggle() {
  const { isDemoMode, toggleDemoMode } = useAuth()

  return (
    <Button variant="outline" className="w-full" onClick={toggleDemoMode}>
      {isDemoMode ? "Disable Demo Mode" : "Enable Demo Mode"}
    </Button>
  )
}
