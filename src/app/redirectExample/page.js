// app/protected/page.js
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  const session = await auth()

  if (!session) {
    // Redirect to the NextAuth sign-in page
    redirect("/api/auth/signin")
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  )
}
