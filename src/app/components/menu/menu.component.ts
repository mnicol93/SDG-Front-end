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
  public selected: boolean;
  // Envia informacion a otro Componente
  @Output() clickedComarca: EventEmitter<any> = new EventEmitter();
  @Output() totalComarcas: EventEmitter<any> = new EventEmitter();

  constructor(private service:GetService) { 
    this.comarcas = []
  }

  clickComarca(comarca: any): void {
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
