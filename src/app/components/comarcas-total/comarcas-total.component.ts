import { Component, OnInit } from '@angular/core';

import { Comarca } from 'src/app/classes/comarca';

@Component({
  selector: 'app-comarcas-total',
  templateUrl: './comarcas-total.component.html',
  styleUrls: ['./comarcas-total.component.css']
})
export class ComarcasTotalComponent implements OnInit {

  comarca: Comarca;

  constructor() { }

  ngOnInit(): void {
  }

}
