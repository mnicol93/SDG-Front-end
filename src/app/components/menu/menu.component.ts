import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetService } from 'src/app/services/get.service';
import { Comarca } from 'src/app/classes/comarca'; 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public comarcas: any;
  public hayCambio: boolean;
  // Envia informacion a otro Componente
  @Output() clickedComarca: EventEmitter<any> = new EventEmitter();
  @Output() totalComarcas: EventEmitter<any> = new EventEmitter();
  @Output() cambio: EventEmitter<boolean> = new EventEmitter();

  constructor(private service:GetService) { 
    this.comarcas = []
    this.hayCambio = !this.hayCambio;
  }

  clickComarca(comarca: any): void {
    this.cambio.emit(!this.hayCambio)
    this.clickedComarca.emit(comarca);
  }

  ngOnInit(): void {
    this.service.getComarcas()
    .subscribe(response => {
      this.comarcas = response;
      this.totalComarcas.emit(this.comarcas);
    })
  }
}
