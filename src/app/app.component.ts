import { Component } from '@angular/core';

import { GetService } from 'src/app/services/get.service';

import { Comarca } from 'src/app/classes/comarca';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba frontend SDG Group';

  comarcaActual: Comarca;
  listaComarcas: any;
  
  cambioComarca(comarca: Comarca): void{
    this.comarcaActual = comarca;
  }
  enviaComarcas(comarcas: any): void{
    this.listaComarcas = comarcas;
  }
}
