export function updateChart(comarca: any): Highcharts.Options{
    // Convierte a type: number; para mostrar en el grafico
    let masculino: number = +comarca['cross:DataSet']['cross:Section']['cross:Obs'][0].OBS_VALUE;
    let femenino: number = +comarca['cross:DataSet']['cross:Section']['cross:Obs'][1].OBS_VALUE;
    let total: number = +comarca['cross:DataSet']['cross:Section']['cross:Obs'][2].OBS_VALUE;

    return { // required
      chart: {
        renderTo: 'container'
      },
      title: { text: this.comarca.title },
      xAxis: {
        categories: ['Masculino', 'Femenino', 'Total'],
        title: { text: 'Comarcas' }
      },
      yAxis: {
        categories: ['masc', 'fem', 'total'],
        title: { text: 'Habitantes' }
      },
      series: [{
        name: 'Habitantes por genero por comarca',
        data: [ 
          masculino,
          femenino,
          total
        ],
        type: 'bar'
      }]
    }; 
  }
 export function updateTotal(listaComarcas: any): Highcharts.Options{
    if(listaComarcas.feed.entry.length > 0){
      // Array para guardas las comarcas y los habitantes.
      let comarcasGraf: string[] = [];
      let habitantes: number[] = [];

      // Extrae cada comarca/habitantes
      listaComarcas.feed.entry.forEach(comarca => {
        comarcasGraf.push(comarca.title);
        habitantes.push(
          +comarca['cross:DataSet']['cross:Section']['cross:Obs'][2].OBS_VALUE
          )
        console.log(comarcasGraf + ' '+ habitantes)
      });

    return { // required
      chart: {
        renderTo: 'container'
      },
      title: { text: "Habitantes totales por Comarca" },
      xAxis: {
        categories: comarcasGraf,
        title: { text: 'Comarcas' }
      },
      yAxis: {
        categories: [],
        title: { text: 'Habitantes' }
      },
      series: [{
        name: 'Habitantes totales por comarca',
        data: habitantes,
        type: 'bar'
      }]
    }; 
    }
    return {
        chart: {
            renderTo: 'container'
          },
          title: { text: "ERROR" }
    }
  }