import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import * as Highcharts from 'highcharts';
import { updateTotal, updateChart } from './chart-helper';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  @Input() comarca: any;
  @Input() listaComarcas: any;
  @Input() genero: string;

  private comarcasGraf: string[];
  private habitantes: number[];

  options: Highcharts.Options = { // required
    chart: {
      renderTo: 'container'
    },
    title: { text: "Vacio"},
    xAxis: {
      categories: [],
      title: { text: 'Comarcas' }
    },
    yAxis: {
      categories: [],
      title: { text: 'Habitantes' }
    },
    series: [{
      name: 'Habitantes por comarca',
      data: [],
      type: 'bar'
    }]
  }; 

  // Para evitar el renderizado doble (Highcharts primero carga
  // sin datos en el servidor) se comprueba si Highcharts es tipo objeto,
  // lo cual no se cumple en el servidor. Si lo es, renderizamos con '*ngIf'
  // (https://github.com/highcharts/highcharts-angular#angular-universal---ssr)
  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = this.options; // required
  // Asignar True cuando se quiera actualizar el grafico, valor cambia
  // a False internamente en el componente Highcharts-angular.  
  updateFlag: boolean = false;
  // Funcion que devuelve el objeto chart (this). 
  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
  }

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = updateTotal(this.listaComarcas, this.genero);
  }

  ngOnChanges(changes: SimpleChange): void {
    this.chartOptions = updateChart(this.comarca, this.genero);
  }

    // updateChart(){
    //   // Convierte a type: number; para mostrar en el grafico
    //   let masculino: number = +this.comarca['cross:DataSet']['cross:Section']['cross:Obs'][0].OBS_VALUE;
    //   let femenino: number = +this.comarca['cross:DataSet']['cross:Section']['cross:Obs'][1].OBS_VALUE;
    //   let total: number = +this.comarca['cross:DataSet']['cross:Section']['cross:Obs'][2].OBS_VALUE;

    //   this.chartOptions = { // required
    //     chart: {
    //       renderTo: 'container'
    //     },
    //     title: { text: this.comarca.title },
    //     xAxis: {
    //       categories: ['Masculino', 'Femenino', 'Total'],
    //       title: { text: 'Comarcas' }
    //     },
    //     yAxis: {
    //       categories: ['masc', 'fem', 'total'],
    //       title: { text: 'Habitantes' }
    //     },
    //     series: [{
    //       name: 'Habitantes por genero por comarca',
    //       data: [ 
    //         masculino,
    //         femenino,
    //         total
    //       ],
    //       type: 'bar'
    //     }]
    //   }; 
    // }
}
