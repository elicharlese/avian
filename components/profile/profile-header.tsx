"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function ProfileHeader() {
  const { user, authType, isDemoMode } = useAuth()
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "File too large",
        description: "Please select an image under 5MB",
      })
      return
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please select an image file",
      })
      return
    }

    setIsUploading(true)

    try {
      // In a real app, you would upload the file to your server or a storage service
      // For demo purposes, we'll simulate a successful upload
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Profile picture updated",
        description: "Your profile picture has been updated successfully",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "There was a problem uploading your profile picture",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-border">
              {user?.image ? (
                <AvatarImage src={user.image || "/placeholder.svg"} alt={user?.name || "Profile"} />
              ) : (
                <AvatarFallback className="text-2xl">{user?.name?.charAt(0) || "A"}</AvatarFallback>
              )}
            </Avatar>
            {!isDemoMode && (
              <div className="absolute -bottom-2 -right-2">
                <label htmlFor="avatar-upload">
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90">
                    {isUploading ? (
                      <Icons.spinner className="h-4 w-4 animate-spin" />
                    ) : (
                      <Icons.camera className="h-4 w-4" />
                    )}
                  </div>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleAvatarUpload}
                    disabled={isUploading || isDemoMode}
                  />
                </label>
              </div>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold">{user?.name || "User"}</h1>
            <p className="text-muted-foreground">
              {user?.email || (authType === "wallet" ? `${user?.walletType}: ${user?.walletAddress}` : "")}
            </p>
            {authType && (
              <div className="mt-2 flex items-center justify-center gap-2 sm:justify-start">
                <span className="text-sm text-muted-foreground">Signed in with:</span>
                {authType === "oauth" && <Icons.google className="h-4 w-4" />}
                {authType === "wallet" && user?.walletType === "Phantom" && <Icons.phantom className="h-4 w-4" />}
                {authType === "wallet" && user?.walletType === "Solflare" && <Icons.solflare className="h-4 w-4" />}
                {authType === "wallet" && user?.walletType === "MetaMask" && <Icons.metamask className="h-4 w-4" />}
                {authType === "demo" && <Icons.demo className="h-4 w-4" />}
                <span className="text-sm font-medium capitalize">{authType}</span>
              </div>
            )}
            {isDemoMode && (
              <div className="mt-4">
                <Button variant="outline" size="sm" disabled>
                  Demo Mode Active
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
