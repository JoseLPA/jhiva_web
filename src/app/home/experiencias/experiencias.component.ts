import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styles: [
    `
    .row{
      background-color: #335280;
      color: white;
      border-radius: 30px;
    }
    img{
      border-radius: 30px;
    }
    `
  ]
})
export class ExperienciasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
