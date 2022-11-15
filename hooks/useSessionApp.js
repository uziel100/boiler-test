import { signIn, signOut, useSession } from 'next-auth/react'
import { useMemo } from 'react'

const useSessionApp = () => {
  const session = useSession()

  const isLogged = useMemo(() => !!session.data, [session.data, session.status])

  return {
    session,
    signOut,
    signIn,
    isLogged
  }
}
export default useSessionApp
