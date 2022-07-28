import { Component, OnInit } from '@angular/core';

import { Comarca } from 'src/app/classes/comarca';

@Component({
  selector: 'app-comarcas-masculino',
  templateUrl: './comarcas-masculino.component.html',
  styleUrls: ['../comarcas.css']
})
export class ComarcasMasculinoComponent implements OnInit {

  comarcaActual: Comarca;
  listaComarcas: any;
  genero: string = 'Masculino';
   
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
