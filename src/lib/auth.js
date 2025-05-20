import { getServerSession } from "next-auth"
import AzureADProvider from "next-auth/providers/azure-ad"
import NextAuthConfig from "../nextauth.config"

export const auth = () => getServerSession(NextAuthConfig)

export default NextAuthConfig
