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
  // Envia informacion a otro Componente
  @Output() clickedComarca: EventEmitter<Comarca> = new EventEmitter();

  constructor(private service:GetService) { 
    this.comarcas = []
  }

  clickComarca(comarca: any): void {
    // console.log(JSON.stringify(comarca['cross:DataSet']['cross:Section']['cross:Obs'][0].OBS_VALUE));
    this.clickedComarca.emit(comarca);
  }

  ngOnInit(): void {
    this.service.getComarcas()
    .subscribe(response => {
      this.comarcas = response;
      console.log(typeof this.comarcas);
    })
  }
}
