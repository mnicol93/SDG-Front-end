import { Component, OnInit } from '@angular/core';
import { Comarca } from 'src/app/classes/comarca';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public comarcas: any;


  constructor(private service:GetService) { 
    this.comarcas = []
  }

  ngOnInit(): void {
    this.service.getComarcas()
    .subscribe(response => {
      this.comarcas = response;
      console.log(this.comarcas.feed.entry[0].title);
    })

  }

}
