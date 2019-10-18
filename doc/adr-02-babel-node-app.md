# ADR 02: Usar `import` para enlazar clases entre ficheros

Lo deseable es poder utilizar `import` para importar clases y demás de unos
ficheros a otros.

Se prefiere `import` a `require`, el *nativo* de Node.js.

`import` parece más *moderno*, y hacia donde debería dirigirse todo JavaScript.

## Decisión

La aplicación no podrá ejecutarse como una aplicación Node.js simple, deberá ser
traspilada con Babel.

Existe una librería que hace esto por nosotros, `babel-node`, que permite ejecutar
scripts de Node.js con un paso previo de traspilación hecha por Babel. 

## Justificación

## Estado

Aceptado

## Consecuencias

La aplicación se ejecutará con `babel-node src/index.js`
