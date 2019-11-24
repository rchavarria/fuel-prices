# Formato de las respuestas de Geoportal

```json
{
    "bbox": {
        "x0": -3.178028,
        "y0": 40.464111,
        "x1": -3.178028,
        "y1": 40.464111,
        "initialized": true,
        "latitudeSeparation": 0
    },
    "estaciones": [
        {
            "id": null,
            "precio": 1.205,
            "estacion": {
                "id": 11591,
                "rotulo": "REPSOL",
                "operador": "EMPRESAS DEL GRUPO REPSOL",
                "direccion": "CALLE SETAS, 1",
                "margen": "D",
                "codPostal": "19162",
                "provincia": "GUADALAJARA",
                "municipio": null,
                "localidad": "PIOZ                     ",
                "fechaPvp": "11/11/2019",
                "horaPvp": "19:33",
                "tipoVenta": "P",
                "remision": "dm",
                "coordenadaX": "03W1040,9",
                "coordenadaY": "40N2750,8",
                "coordenadaX_dec": -3.178028,
                "coordenadaY_dec": 40.464111,
                "horario": "L-D: 05:00-23:00",
                "nombreCCAA": null,
                "tipoRango": null,
                "tipoEstacion": null,
                "porcBioetanol": 0,
                "porcBioalcohol": 0,
                "servicios": null,
                "imagenEESS": null,
                "planesDescuento": null,
                "favorita": false,
                "valoracion": null
            },
            "producto": {
                "id": null,
                "nombre": null,
                "descripcion": null,
                "activo": null,
                "terrestre": false,
                "embarcacion": false,
                "bioetanol": false,
                "biodiesel": false
            },
            "favorita": false
        }
    ]
}
```

De las respuestas, lo más interesante es el array de `estaciones`.

Este formato es el devuelto por el API a día de 24-11-2019.
