import { format, parseISO } from 'date-fns'

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString)
  return format(date, 'MM-dd HH:mm')
}
