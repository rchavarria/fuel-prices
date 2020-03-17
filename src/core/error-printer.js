/**
 * Creates a function that logs errors
 *
 * @param logger
 *
 * @returns function Logs an error
 */
export default function (logger) {
  return function (error) {
    logger.error('Error:', error)
  }
}
