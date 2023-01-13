import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [
    `
    #proy_especifico{
      background-color: #6f7072;
      border-top: 1px solid;
      border-color: white;
      color: white;
    }
    #proy{
      background-color: #335280;
      color: white;
      border-radius: 0 30px 0 0;
      width: 95%;
    }
    #btn-principal{
      background-color: #6f7072;
      border-color: #6f7072;
      color: white;
    }
    #btn-principal:hover{
      background-color: white;
      border-color: #6f7072;
      color: #335280;
    }
    
    #btn-secundario{
      background-color: #335280;
      border-radius: 0 0 10px 10px;
      border-color: #335280;
      color: white;
    }
    #btn-secundario:hover{
      background-color: white;
      border-color: white;
      color: #6f7072;
    }

    #titulo{
      background-color: #335280;
      color: white;
    }
    `
  ]
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
