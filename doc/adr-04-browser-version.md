# ADR 04: Versión para navegadores 

La idea es poder ver los precios de mis gasolineras favoritas desde
el navegador, sin tener que estar en el ordenardor de sobremesa y
poder consultar los precios al momento desde el móvil (o desde
cualquier otro sitio)

## Decisión

Seguirá existiendo una versión ejecutable en modo consola, para poder
ver todos los precios de una tacada y de forma que sea fácilmente
ejecutable desde el escritorio

Quiero que haya una página web, un HTML estático, donde tenga un
botón por estación, y que al pinchar, vea el precio del gasoil en
esa estación

## Justificación

Describa aquí justificación de la decisión de diseño. Indique también la
justificación de alternativas significativas que hayan sido rechazadas. Esta
sección también puede indicar suposiciones, restricciones, requisitos y
resultados de evaluaciones y experimentos.

### Experimento #1: posibilidad de consultar el portal desde otra página

Por ahora, parece que Geoportal Gasolineras, no se queja si hago las
consultas desde una aplicación de consola. Pero... ¿Y si la hago desde
el navegador, a otro dominio que no es el de mi página? ¿Saltará algún
error de seguridad? 

Me temo que sí

**Resultado del experimento**

TBD

## Estado

Propuesto

## Consecuencias

Describa aquí el contexto que resulta, después de aplicar la decisión. Todas las
consecuencias deben enumerarse, no solo las consecuencias "positivas". Indique
también las consecuencias "negativas".
