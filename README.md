# Introduccion
Proyecto para SDG Group en el que se elabora una pagina web con [Angular](https://angular.io/) con la ayuda de [Highcharts](https://www.highcharts.com/) para mostrar informacion al usuario.

Dicha Informacion es extraida de la [API](https://www.idescat.cat/dev/api/) que provee el Institut d'Estadistica de Catalunya (IDESCAT). La llamada a la API devuelve un objeto del tipo:

```
      {
        "cross:DataSet": {
          "cross:Section": {
            "AREA": "01",
            "cross:Obs": [
              {
                "OBS_STATUS": "A",
                "SEX": "M",
                "OBS_VALUE": "22817"
              },
              {
                "OBS_STATUS": "A",
                "SEX": "F",
                "OBS_VALUE": "22228"
              },
              {
                "OBS_STATUS": "A",
                "SEX": "T",
                "OBS_VALUE": "45045"
              }
            ],
            "FREQ": "A",
            "DECIMALS": "0",
            "UNIT_MULT": "0",
            "TIME_PERIOD": "2021-01-01"
          }
        },
        "link": {
          "href": "https://www.idescat.cat/emex/?id=01",
          "type": "text/html"
        },
        "id": "tag:idescat.cat,2010:poblacio/01",
        "title": "Alt Camp",
        "category": [
          {
            "term": "sim2"
          },
          {
            "term": "COM"
          }
        ],
        "updated": "2022-02-28T11:00:00+00:00",
        "content": {
          "xml:lang": "ca",
          "content": "Comarca: 45.045 hab."
        }
      },
      ```
# La APP

La aplicación consta de una barra de navegacion con enlaces a las tres vistas mediante Enrutamiento. El logo de github es un enlace directo a este repositorio.

A la izquierda hay un Menú por el cual filtrar las comarcas; cuando se pulsa en una comarca se elimina del gráfico, y cuando se vuelve a pulsar vuelve a aparecer. Hay un pequeño bug por el cual hay que pulsar otra comarca antes de volver a añadir la comarca anteriormente eliminada.

También he añadido los ficheros de environment, ya que estos no contienen ninguna información sensible, tan solo la URL para hacer las llamadas a la API.

# Como probar la aplicación

Después de clonar el repositorio, ejecutar el comando ```npm install```. A continuación, el comando ```npm start``` ejecutará la aplicación en el puerto ```4200```, y se podrá acceder a ella mediante el navegador en la dirección ```localhost:4200```.
