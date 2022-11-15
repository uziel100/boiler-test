import { format } from 'date-fns'

const formatDate = date => {
  const rawDate = new Date(date)
  return format(rawDate, 'dd/MM/yyyy')
}
export default formatDate
