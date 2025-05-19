'use client'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <p>Not signed in</p>
      <button onClick={() => signIn("azure-ad")}>Sign in with Microsoft</button>
    </>
  )
}
