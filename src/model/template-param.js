/**
 * Key/Value pair to work as a param to render in a template
 */
export default class TemplateParam {
  constructor (key, value) {
    this.key = '{' + key + '}'
    this.value = value
  }
}
