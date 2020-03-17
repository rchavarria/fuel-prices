/**
 * Replaces a tag present in a template with a value provided by a param
 *
 * @param template {string}
 * @param param {{key: string, value: string}} Param to replace
 *
 * @returns {string}
 */
function renderJustOne (template, param) {
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
export default function (template, params) {
  return params.reduce(renderJustOne, template)
}
