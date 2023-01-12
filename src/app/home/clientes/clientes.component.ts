import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
    `
    img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      border-radius: 30px;

    }
    `
  ]
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
