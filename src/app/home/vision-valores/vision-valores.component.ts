import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-valores',
  templateUrl: './vision-valores.component.html',
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
export class VisionValoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
