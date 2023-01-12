import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
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
export class MisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
