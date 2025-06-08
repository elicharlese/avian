import { SignUpForm } from "@/components/auth/signup-form"
import { WalletSignUp } from "@/components/auth/wallet-signup"
import { OAuthSignIn } from "@/components/auth/oauth-signin"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Plane } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="mb-4 flex items-center gap-2 text-lg font-bold">
        <Plane className="h-6 w-6" />
        <span>AVIAN</span>
      </Link>

      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Choose your preferred sign up method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="google">Google</TabsTrigger>
              <TabsTrigger value="wallet">Wallet</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <SignUpForm />
            </TabsContent>
            <TabsContent value="google">
              <OAuthSignIn isSignUp />
            </TabsContent>
            <TabsContent value="wallet">
              <WalletSignUp />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            <span>Already have an account? </span>
            <Link href="/auth/signin" className="text-primary underline-offset-4 transition-colors hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
