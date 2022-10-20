import useSessionApp from 'hooks/useSessionApp'

const AccountPageRoot = () => {
  const { session } = useSessionApp()

  return (
    <div>
      <h1>AccountPageRoot</h1>
      <pre>{JSON.stringify(session.data, null, 3)}</pre>
    </div>
  )
}
export default AccountPageRoot
