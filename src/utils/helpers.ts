import moment from 'moment'

export const formatDate = (dateOrTimestamp: string | number): string => {
  if (typeof dateOrTimestamp === 'string') {
    return moment(dateOrTimestamp).format('DD/MM')
  }

  return moment(new Date(dateOrTimestamp * 1000)).format('DD/MM')
}
