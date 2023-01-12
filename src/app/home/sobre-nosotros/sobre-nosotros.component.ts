import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
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
export class SobreNosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
