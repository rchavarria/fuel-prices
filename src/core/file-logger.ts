import fs from 'fs'
import {ILogger} from "./ILogger";

/**
 * Logger to write messages into files
 */
export default class FileLogger implements ILogger {
  constructor (
    private readonly path: string
  ) {
  }

  log (line) {
    fs.appendFileSync(this.path, line + '\n')
  }

  error(...args): void {
    this.log(args)
  }
}
