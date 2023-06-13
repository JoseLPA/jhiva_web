import { Component, OnInit } from '@angular/core';
import { Empresa } from '../interfaces/empresas.interface';

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
    }
    `
  ]
})
export class ClientesComponent implements OnInit {
  empresas: Empresa[] = [
    {
      id_empresa: 1,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 2,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 3,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 4,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 5,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 6,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 7,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
    {
      id_empresa: 8,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 0,
      alt_img: ""
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
