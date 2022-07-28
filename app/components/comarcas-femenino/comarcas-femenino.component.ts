import { Component, OnInit } from '@angular/core';

import { Comarca } from 'src/app/classes/comarca';
@Component({
  selector: 'app-comarcas-femenino',
  templateUrl: './comarcas-femenino.component.html',
  styleUrls: ['../comarcas.css']
})
export class ComarcasFemeninoComponent implements OnInit {
  
  comarcaActual: Comarca;
  listaComarcas: any;
  genero: string = 'Femenino';
  
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
