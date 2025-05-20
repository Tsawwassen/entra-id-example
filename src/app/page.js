'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function HomePage() {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Welcome to the App</h1>

      {session ? (
        <div>
          <p>Signed in as {session.user.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          <p>You are not signed in</p>
          <button onClick={() => signIn("azure-ad")}>Sign in</button>
        </div>
      )}
    </div>
  )
}

