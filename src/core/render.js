export default function (template, params) {
  return params.reduce((acc, param) => {
    return acc.replace(param.key, param.value)
  }, template)
}
