declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
      accessToken: string
      client: string
      uid: string
      expiry: number
      user?: User
    }
  }
  