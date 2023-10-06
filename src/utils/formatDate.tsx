export default function formatDateAndTimeAgo(
  dateString: string | number | Date
) {
  const currentDate = new Date() as any
  const givenDate = new Date(dateString) as any

  const timeDifference = currentDate - givenDate
  const minutesAgo = Math.floor(timeDifference / (1000 * 60))
  const hoursAgo = Math.floor(minutesAgo / 60)
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (daysAgo >= 1) {
    return daysAgo > 365
      ? (daysAgo / 365).toFixed() + ' tahun yang lalu'
      : daysAgo + ' hari yang lalu'
  } else if (hoursAgo >= 1) {
    return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`
  } else if (minutesAgo >= 1) {
    return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`
  } else {
    return 'just now'
  }
}
