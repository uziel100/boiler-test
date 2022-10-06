import { createContext, useContext } from 'react'

export const AppContext = createContext({
  agent: null,
  session: null,
  timezone: null,
  setSession: () => {},
  loggedOut: true,
  loggedIn: false
})

export const AppContextProvider = ({ children, value }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
)

export const useAppContextProvider = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContextProvider must be used within AppContextProvider')
  }
}
