import { Component, OnInit } from '@angular/core';

import { Comarca } from 'src/app/classes/comarca';
@Component({
  selector: 'app-comarcas-total',
  templateUrl: './comarcas-total.component.html',
  styleUrls: ['../comarcas.css']
})
export class ComarcasTotalComponent implements OnInit {

  comarcaActual: Comarca;
  listaComarcas: any;
  genero: string = 'Total';
  
  cambioComarca(comarca: Comarca): void{
    this.comarcaActual = comarca;
  }
  enviaComarcas(comarcas: any): void{
    this.listaComarcas = comarcas;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
