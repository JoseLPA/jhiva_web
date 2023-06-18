import { Component, OnInit } from '@angular/core';
import { Empresa } from '../interfaces/empresas.interface';
import { Proyecto } from '../interfaces/proyectos.interface';

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
  dir = "assets/img/proyectos/";
  empresas: Empresa[] = [
    {
      id_empresa: 1,
      nombre_empresa: "MER Telcom",
      nombre_simple: "MER",
      cant_proyectos: 3,
      alt_img: "",
      proyectos: [
        {
          id_proyecto: "MER_1",
          nombre_proyecto: "Desarme de sitios completos de VTR y otras empresas.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "MER_2",
          nombre_proyecto: "Mantención y refuerzos sitios Claro.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "MER_3",
          nombre_proyecto: "Construcción de sitios monoposte de Claro en PHAM.",
          tiene_fotos: true,
          alt_img: [`${this.dir}MER/proy3-1.png`, `${this.dir}MER/proy3-2.png`, `${this.dir}MER/proy3-3.png`]
        }
      ]
    },
    {
      id_empresa: 2,
      nombre_empresa: "MINM",
      nombre_simple: "MINM",
      cant_proyectos: 2,
      alt_img: "",
      proyectos: [
        {
          id_proyecto: "MINM_1",
          nombre_proyecto: "Construcción de sitios incluida zona de la araucanía.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "MINM_2",
          nombre_proyecto: "Cambio de Radomos.",
          tiene_fotos: false,
        }
      ]
    },
    {
      id_empresa: 3,
      nombre_empresa: "WOM",
      nombre_simple: "WOM",
      cant_proyectos: 3,
      alt_img: "",
      proyectos: [
        {
          id_proyecto: "WOM_1",
          nombre_proyecto: "Desarme de sitios completos.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "WOM_2",
          nombre_proyecto: "Mantención y refuerzos de sitios.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "WOM_3",
          nombre_proyecto: "Construcción de sitios monoposte.",
          tiene_fotos: true,
          alt_img: [`${this.dir}WOM/wom_1.png`, `${this.dir}WOM/wom_2.png`, `${this.dir}WOM/wom_3.png`, `${this.dir}WOM/wom_4.png`]
        }
      ]
    },
    {
      id_empresa: 4,
      nombre_empresa: "COMTEC",
      nombre_simple: "COM",
      cant_proyectos: 3,
      alt_img: "",
      proyectos: [
        {
          id_proyecto: "COM_1",
          nombre_proyecto: "Sitios completos al sur del pais.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "COM_2",
          nombre_proyecto: "Azoteas en R.M. y Zona Norte.",
          tiene_fotos: false,
        },
        {
          id_proyecto: "COM_3",
          nombre_proyecto: "Canalización en la R.M.",
          tiene_fotos: true,
          alt_img: [
            `${this.dir}CONNECT/connect-proy-3-1.png`,
            `${this.dir}CONNECT/connect-proy-3-2.png`, 
            `${this.dir}CONNECT/connect-proy-3-3.png`,
            `${this.dir}CONNECT/connect-proy-3-4.png`,
            `${this.dir}CONNECT/connect-proy-3-5.png`
          ]
        }
      ]
    },
    {
      id_empresa: 5,
      nombre_empresa: "Santa Sofia y Humberto Perez",
      nombre_simple: "SANTA",
      cant_proyectos: 1,
      alt_img: "",
      proyectos: [
        {
          id_proyecto: "SANTA_1",
          nombre_proyecto: "Pavimmentación en la R.M.",
          tiene_fotos: true,
          alt_img: [
            `${this.dir}SANTA/santa-proy-1.png`,
            `${this.dir}SANTA/santa-proy-2.png`, 
            `${this.dir}SANTA/santa-proy-3.png`,
            `${this.dir}SANTA/santa-proy-4.png`,
            `${this.dir}SANTA/santa-proy-5.png`,
          ]
        }
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
