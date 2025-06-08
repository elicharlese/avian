import { Suspense } from "react"
import { Plane } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SignInFormWrapper } from "@/components/auth/signin-form-wrapper"
import { WalletSignIn } from "@/components/auth/wallet-signin"
import { OAuthSignIn } from "@/components/auth/oauth-signin"

export default function SignInPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="mb-4 flex items-center gap-2 text-lg font-bold">
        <Plane className="h-6 w-6" />
        <span>AVIAN</span>
      </Link>

      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>Choose your preferred sign in method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="google">Google</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <Suspense fallback={<div className="p-4 text-center">Loading sign-in form...</div>}>
                <SignInFormWrapper />
              </Suspense>
            </TabsContent>
            <TabsContent value="google">
              <OAuthSignIn />
            </TabsContent>
            <TabsContent value="wallet">
              <WalletSignIn />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            <span>Don't have an account? </span>
            <Link href="/auth/signup" className="text-primary underline-offset-4 transition-colors hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
