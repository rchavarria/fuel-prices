/**
 * Key/Value pair to work as a param to render in a template
 */
export default class TemplateParam {
  public readonly key: string
  public readonly value: string

  constructor (
    key: string,
    value: string,
  ) {
    this.key = `{${key}}`
    this.value = value
  }
}
