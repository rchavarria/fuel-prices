# Peticiones de datos a geoportalgasolineras.es

Las peticiones para obtener datos, son peticiones POSTs a la URL

```
https://geoportalgasolineras.es/rest/busquedaEstaciones
```

Los parámetros de la petición van en el cuerpo de la petición POST, en formato
JSON.

La cabecera `Accept` de la petición debe indicar `application/json`. Un valor
válido para dicha cabecera es:

```
application/json, text/plain, */*
```

## Ejemplos

### Gasolineras GALP de Alcalá de Henares

El cuerpo de la petición es:

```json
{
    "tipoEstacion": "EESS",
    "idProvincia": "28",
    "idMunicipio": 35174,
    "idProducto": 4,
    "rotulo": "galp",
    "eessEconomicas": false,
    "conPlanesDescuento": false,
    "horarioInicial": null,
    "horarioFinal": null,
    "calle": "",
    "numero": "",
    "codPostal": "",
    "tipoVenta": null,
    "idOperador": null,
    "nombrePlan": "",
    "idTipoDestinatario": null
}
```
