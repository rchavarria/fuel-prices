export default function (template, params) {
  let result = template
  params.forEach(param => {
    result = result.replace(param.key, param.value)
  })

  return result
}
