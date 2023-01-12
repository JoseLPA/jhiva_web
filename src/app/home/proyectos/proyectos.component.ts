import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [
    `
    #proy_especifico{
      background-color: #6f7072;
      color: white;
    }
    #proy{
      width: 100%;
      background-color: #335280;
      color: white;
      border-radius: 0 30px 0 0;
      width: 95%;
    }
    #btn-principal{
      background-color: #6f7072;
      border-color: #6f7072;
    }
    #btn-secundario{
      background-color: #335280;
      border-color: #335280;
    }
    `
  ]
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
