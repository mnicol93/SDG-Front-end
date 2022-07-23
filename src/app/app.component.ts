import { Component } from '@angular/core';
import { Comarca } from 'src/app/classes/comarca';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba frontend SDG Group';

  comarcaActual: Comarca = new Comarca();

  cambioComarca(comarca:Comarca): void{
    this.comarcaActual = comarca;
  }
}
