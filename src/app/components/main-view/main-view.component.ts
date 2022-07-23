import { Component, OnInit, Input } from '@angular/core';
import { Comarca } from 'src/app/classes/comarca';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  @Input() comarca: any;

  constructor() { 

  }

  ngOnInit(): void {

  }

}
