import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .hd-footer{
        background-color: #335280;
        color: white;
      }
      #nav-text{
        color: #335280;
        
      }
      #nav-text:hover{
        background-color: #335280;
        color: white;
      }
      p{
        font-style: italic;
      }
      #nav-responsive-btn{
        background-color: white;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redireccionar(){
    this.router.navigate(['home/sobre-nosotros']);
  }

}
