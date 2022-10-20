import { signIn, signOut, useSession } from 'next-auth/react'

const useSessionApp = () => {
  const session = useSession()

  return {
    session,
    signOut,
    signIn
  }
}
export default useSessionApp
