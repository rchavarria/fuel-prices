import TemplateParam from '../model/template-param'

/**
 * Replaces a tag present in a template with a value provided by a param
 *
 * @param template
 * @param param Param to replace
 *
 * @returns
 */
function renderJustOne (template: string, param: TemplateParam): string {
  return template.replace(param.key, param.value)
}

/**
 * Renders a list of params into a template
 *
 * @param template {string}
 * @param params array
 *
 * @returns {string}
 */
export default function (template: string, params: TemplateParam[]): string {
  return params.reduce(renderJustOne, template)
}
