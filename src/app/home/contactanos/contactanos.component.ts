import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styles: [
    `
    img{
      border-radius: 30px;
    }
    a{
      color: #335280;
    }
    `
  ]
})
export class ContactanosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
