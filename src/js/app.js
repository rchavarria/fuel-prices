(() => {
  async function listCitiesByProvince(province) {
    const response = await fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${province}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

    return await response.json();
  }

  async function stationsByCity(city) {
    const response = await fetch(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroMunicipio/${city}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

    return await response.json()
  }

  async function fetchPrice(cityId, stationId, product) {
    const stations = await stationsByCity(cityId)
    const station = stations.ListaEESSPrecio.find(s => s.IDEESS === stationId)
    if (!station) {
      return 'N/A'
    }

    return station[product]
  }

  async function load(cityId, stationId) {
    const price = await fetchPrice(cityId, stationId, 'Precio Gasoleo A')
    const element = document.getElementById(`${cityId}-${stationId}`)
    if (!element) {
      return
    }

    element.innerHTML = `<div>${price} €</div>`
  }

  window.FuelPrices = window.FuelPrices || {};
  window.FuelPrices.load = load;
})()
