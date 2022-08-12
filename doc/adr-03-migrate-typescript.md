# ADR 03: Migrate to TypeScript 

Babel comienza a ser lento, mientras que en el trabajo comenzamos a usar
TypeScript para muchos proyectos y el estado del compilador y las herramientas
comienzan a estar bastante bien para usar TypeScript en el día a día

## Decisión
 
Dejo de utilizar Babel y migro todo el JavaScript a TypeScript 

Debería ser algo sencillo, puesto que el JavaScript ya estaba pensado de forma
JavaScript más moderno, con el uso de clases y demás

En la migración, sobretodo he usado los tipos de TypeScript en las clases y en
los parámetros de los métodos

Nada mucho más avanzado que eso

## Justificación

## Estado

Aceptado

## Consecuencias

Ya no hay rastro de Babel

Antes de ejecutar nada, hay que compilar

Una vez compilado, hay que ejecutar el código bajo el directorio `dist`
