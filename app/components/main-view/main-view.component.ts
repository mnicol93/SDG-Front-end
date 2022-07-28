import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Comarca } from 'src/app/classes/comarca';

Highcharts.setOptions({
  title: {
    text: "Probando"
  }
})

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  @Input() comarca: any;
  @Input() listaComarcas: any;
  @Input() genero: string;

  constructor() { 

  }
  ngOnInit(): void {
  }

}
