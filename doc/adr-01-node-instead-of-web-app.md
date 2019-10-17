# ADR 01: El proyecto será una app Node.js en lugar de una web

Como era de suponer, hay problemas con CORS, y las peticiones desde 
http://localhost no pueden estar dirigidas a http://geoportalgasolineras.es,
porque esas peticiones las bloquea el navegador.

Para solucionarlo, debería cambiar la parte del servidor, para que enviara la
cabecera HTTP adecuada. Pero no puedo cambiar el servidor.

## Decisión
 
Dejo de usar el navegador y el proyecto será una app Node.js

## Justificación

## Estado

Aceptado

## Consecuencias
