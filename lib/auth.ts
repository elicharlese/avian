import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Here you would typically verify the credentials against your database
        // For demo purposes, we'll use a mock user
        if (credentials?.email === "admin@aviantravel.com" && credentials?.password === "password123") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@aviantravel.com",
            role: "admin",
          }
        }

        // If you return null, an error will be displayed advising the user to check their details
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Add user role to token if available
      if (user) {
        token.role = (user as any).role || "user"
      }

      // Add provider info to token if available
      if (account) {
        token.provider = account.provider
      }

      return token
    },
    async session({ session, token }) {
      // Add role to session
      if (session.user) {
        ;(session.user as any).role = token.role
        ;(session.user as any).provider = token.provider
      }

      return session
    },
  },
  debug: process.env.NODE_ENV === "development",
}
