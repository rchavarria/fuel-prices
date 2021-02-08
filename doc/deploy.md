# Despliegues

Durante todo este tiempo, la he desplegado de varias formas en una Raspberry 
PI 3, pero siempre como una tarea de `cron`.

Se puede modificar el script de `cron` mediante el comando `crontab -e`, y 
añadir estas líneas:

```
#
# Ejecuta la aplicación para conocer el precio de la gasolina en varias
# gasolineras, de las que a mí me interesa, Pioz, Alcalá y Guada
#
# * * * * * docker run --rm -v /home/pi/projects/fuel-prices:/usr/src/app -w /usr/src/app node:12 npm run --silent stations > /var/log/cron.log 2> /var/log/cron.error.log
```

En lugar de editar la configuración de esa manera, se pone un script (de bash
por ejemplo) en el directorio `/etc/cron.daily/` para que `cron` la ejecute
diariamente:

```
#!/bin/sh

docker run --rm -v /home/pi/projects/fuel-prices:/usr/src/app -w /usr/src/app node:12 npm run --silent stations > /var/log/cron.log 2> /var/log/cron.error.log
```
