import { useError } from 'hooks'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useCategoryService } from '../hooks'

export const SidebarAmazonContext = createContext(null)

export const SidebarAmazonProvider = ({ children }) => {
  const { getCategoriesDrawer } = useCategoryService()
  const { showAlert } = useError()
  const [subContainer, setSubContainer] = useState(false)
  const [subContainerEntries, setSubContainerEntries] = useState(null)
  const [entryStore, setEntryStore] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCategoriesDrawer()
      .then(data => {
        setEntryStore(data)
      })
      .catch(() => {
        showAlert('Ocurrio un error al recuperar las categorias', 'error')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const memorized = useMemo(
    () => ({
      entryStore,
      subContainer,
      subContainerEntries,
      setSubContainer,
      setSubContainerEntries,
      loading
    }),
    [entryStore, subContainer, subContainerEntries, loading]
  )

  return <SidebarAmazonContext.Provider value={memorized}>{children}</SidebarAmazonContext.Provider>
}

export const useSidebarAmazonContextProvider = () => {
  const context = useContext(SidebarAmazonContext)

  if (context === undefined) {
    throw new Error('useSidebarAmazonContextProvider must be used within a SidebarAmazonContext')
  }

  return context
}
