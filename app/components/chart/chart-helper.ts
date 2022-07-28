import { error } from "highcharts";

export function updateChart(comarca: any): Highcharts.Options{
    // // Convierte a type: number; para mostrar en el grafico
    // let masculino: number = +comarca['cross:DataSet']['cross:Section']['cross:Obs'][0].OBS_VALUE;
    // let femenino: number = +comarca['cross:DataSet']['cross:Section']['cross:Obs'][1].OBS_VALUE;
    // let total: number = +comarca['cross:DataSet']['cross:Section']['cross:Obs'][2].OBS_VALUE;

    return { // required
      chart: {
        renderTo: 'container'
      },
      title: { text: '' },
      xAxis: {
        categories: [],
        title: { text: 'Comarcas' }
      },
      yAxis: {
        categories: ['masc', 'fem', 'total'],
        title: { text: 'Habitantes' }
      },
      series: [{
        name: 'Habitantes genero por comarca',
        data: [ ],
        type: 'bar'
      }]
    }; 
  }
 export function updateTotal(listaComarcas: any, genero: string, filtro: string[]): Highcharts.Options{
    if(listaComarcas.feed.entry.length > 0){
      // Array para guardar las comarcas y los habitantes.
      let comarcasGraf: string[] = [];
      let habitantes: number[] = [];
      // Flag para controlar si elemento esta en el filtro
      let flagFiltro: boolean = false;
      let ARRAY_GENERO: number;
      let TITULO_GENERO: string;
      
      switch(genero){
        case 'Total':
            ARRAY_GENERO = 2;
            TITULO_GENERO = 'totales';
            break;
        case 'Femenino':
            ARRAY_GENERO = 1;
            TITULO_GENERO = 'de genero femenino';
            break;
        case 'Masculino':
            ARRAY_GENERO = 0;
            TITULO_GENERO = 'de genero masculino';
            break;
        default:
            throw new Error('Genero no identificado');            
      }

      // Extrae cada comarca/habitantes
      listaComarcas.feed.entry.forEach(comarca => {
        filtro.forEach(filt => {
            if(filt == comarca.title){
                flagFiltro=true;
            }
        })
        if(!flagFiltro){
            comarcasGraf.push(comarca.title);
            habitantes.push(
            +comarca['cross:DataSet']['cross:Section']['cross:Obs'][ARRAY_GENERO].OBS_VALUE
            )
        }
        flagFiltro = false;
      });

    return { // required
      chart: {
        renderTo: 'container'
      },
      title: { text: `Habitantes ${TITULO_GENERO} por Comarca` },
      xAxis: {
        categories: comarcasGraf,
        title: { text: 'Comarcas' }
      },
      yAxis: {
        categories: [],
        title: { text: 'Habitantes' }
      },
      series: [{
        name: `Habitantes por comarca`,
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