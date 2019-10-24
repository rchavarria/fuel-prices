const title = 'Hay {length} estaciones'
const line = '({id}) Estación "{label}" en {address} tiene un precio de {price}€'

function render (template, params) {
  let result = template
  params.forEach(param => {
    result = result.replace(param.key, param.value)
  })

  return result
}

export default function (stations) {
  const titleParams = [
    { key: '{length}', value: stations.length }
  ]

  const lines = stations.map(stationRecord => {
    const lineParams = [
      { key: '{id}', value: stationRecord.station.id },
      { key: '{label}', value: stationRecord.station.label },
      { key: '{address}', value: stationRecord.station.address },
      { key: '{price}', value: stationRecord.price }
    ]

    return render(line, lineParams)
  })

  console.log(render(title, titleParams))
  console.log(lines.join('\n'))
}
