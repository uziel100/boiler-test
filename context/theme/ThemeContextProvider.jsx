import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DarkTheme, LightTheme } from 'theme'

const THEMES_KEYS = {
  light: LightTheme,
  dark: DarkTheme
}

const PREFERS_SCHEME_COLOR = '(prefers-color-scheme: dark)'
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

const getActiveTheme = themeMode => THEMES_KEYS[themeMode]

export const ThemeCustomContext = createContext({
  theme: null,
  toggleTheme: null,
  changeTheme: null
})

export const ThemeContextProvider = ({ children, emotionCache }) => {
  const isDarkMode = () => Boolean(window.matchMedia(PREFERS_SCHEME_COLOR).matches)
  const getTheme = () => LIGHT_THEME

  const [activeTheme, setActiveTheme] = useState(THEMES_KEYS[LIGHT_THEME])
  const [selectedTheme, setSelectedTheme] = useState(LIGHT_THEME)
  const isMounted = useRef(true)

  useEffect(() => {
    let themeCurrent = selectedTheme
    if (isMounted.current) {
      themeCurrent = getTheme()
      isMounted.current = false
    }
    setSelectedTheme(themeCurrent)
    setActiveTheme(getActiveTheme(themeCurrent))
  }, [selectedTheme])

  const toggleTheme = () => {
    let theme = LIGHT_THEME
    if (selectedTheme === LIGHT_THEME) theme = DARK_THEME
    setSelectedTheme(theme)
  }

  const changeTheme = theme => {
    setSelectedTheme(theme)
  }

  const memorizedValue = useMemo(
    () => ({
      theme: selectedTheme,
      toggleTheme,
      changeTheme
    }),
    [activeTheme, selectedTheme]
  )

  return (
    <ThemeCustomContext.Provider value={memorizedValue}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeCustomContext.Provider>
  )
}

export const useThemeContextProvider = () => {
  const context = useContext(ThemeCustomContext)

  if (context === undefined) {
    throw new Error('useThemeContextProvider must be used within a ThemeContextProvider')
  }

  return context
}
