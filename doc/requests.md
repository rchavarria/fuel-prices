# (Nuevas) Peticiones de datos a geoportalgasolineras.es

Anteriormente, usaba [éstas peticiones](old-requests.md) para obtener
datos sobre las gasolineras

Experimentando para ver si podía implementar este proyecto para ser
ejecutado en el navegador, encontré que hay otra forma

No es realmente un API REST, no es que la documentación sea gloriosa,
pero bueno, al menos parece que se pueden hacer peticiones REST más
o menos como si fuera un servicio externo

Voy a considerar que sí es un API REST, llamémosle el 
*API de Precios Carburantes*: https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help

Parece ser el API del que https://geoportalgasolineras.es toma los datos

En esta misma ayuda se detalla el modelo de datos de las respuestas recibidas

## Proceso

Muy a grandes rasgos, para conocer los precios de una gasolinera,
seguiría estos pasos:

1. Listar los municipios de la Provincia: https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/MunicipiosPorProvincia
2. Buscar el municipio que me interesa
3. Listar las estaciones de servicio de ese municipio: https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/PreciosEESSTerrestresFiltroMunicipio
4. Buscar la gasolinera que me interesa

Una vez tienes localizadas: provincia, municipio y estación de servicio, ya se puede
automatizar todo un poco más, y que el navegador haga el trabajo sucio
de buscar y filtrar
