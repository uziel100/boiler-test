// import { useSnackbar } from 'notistack'
import toast from 'react-hot-toast'

/**
 * Hook to display a snackbar message when an error occurs.
 */
const useError = () => {
  // const { enqueueSnackbar } = useSnackbar()

  const logError = (error, message) => {
    console.log(error)
    if (error.message.includes('[custom]')) {
      const messageText = error.message.split(':').pop().trim()
      toast.error(messageText)
    } else if (error.message.includes('Error')) {
      const customMessage = message || error.message.split(':').pop().trim()
      if (customMessage === 'Failed to fetch') {
        toast.error('Error de red')
        return
      }

      toast.error(customMessage)
    } else if (error.message.includes('GraphQL')) {
      const customMessage = message || error.message.split(':').pop().trim()
      toast.error(customMessage)
    } else {
      const customMessage = error?.message || 'Ocurrió un error inesperado'
      toast.error(customMessage)
    }
  }

  const showAlert = (message, variant = 'warning') => {
    toast[variant](message)
  }

  return {
    logError,
    showAlert
  }
}

export default useError
