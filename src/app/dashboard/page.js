import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  const session = await auth()

  if (!session) {
    redirect("/api/auth/signin") // send to sign-in page
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  )
}
