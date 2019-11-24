export default function (logger) {
  return function (error) {
    logger.error('Error:', error)
  }
}
