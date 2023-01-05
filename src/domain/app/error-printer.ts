import {ILogger} from "./ILogger";

/**
 * Creates a function that logs errors
 *
 * @param logger
 *
 * @returns function Logs an error
 */
export default function (logger: ILogger) {
  return function (error) {
    logger.error('Error:', error)
  }
}
