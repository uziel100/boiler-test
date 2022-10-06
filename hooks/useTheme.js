import { useThemeContextProvider } from 'context/Theme/ThemeContextProvider'

const useTheme = () => {
  const { theme, toggleTheme, changeTheme } = useThemeContextProvider()

  const isDarkMode = () => theme === 'dark'
  const isLightMode = () => theme === 'light'

  return {
    theme,
    toggleTheme,
    changeTheme,
    isDarkMode,
    isLightMode
  }
}

export default useTheme
