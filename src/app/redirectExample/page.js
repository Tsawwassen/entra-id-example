// app/protected/page.js
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  const session = await auth()

  if (!session) {
    // Redirect to the NextAuth sign-in page, returns to this page after sign-in
    redirect("/api/auth/signin?callbackUrl=/redirectExample")
  }

  return (
    <div>
      <h1>Redirect Example Page</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  )
}
