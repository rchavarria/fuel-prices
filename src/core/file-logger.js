import fs from 'fs'

/**
 * Logger to write messages into files
 */
export default class FileLogger {
  constructor (path) {
    this.path = path
  }

  log (line) {
    fs.appendFileSync(this.path, line + '\n')
  }
}
