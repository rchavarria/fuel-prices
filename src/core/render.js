function renderJustOne (template, param) {
  return template.replace(param.key, param.value)
}

export default function (template, params) {
  return params.reduce(renderJustOne, template)
}
