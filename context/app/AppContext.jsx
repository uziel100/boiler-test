import { createContext, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeCart } from 'store/states/cart'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children, value = {} }) => {
  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(initializeCart())
  }, [])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContextProvider = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContextProvider must be used within AppContextProvider')
  }
}
