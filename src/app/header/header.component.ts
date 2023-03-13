import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: any = [
    {
      src: 'https://youtube.com/@mateodiaztecnotec',
      name: 'Youtube'
    },
    {
      src: 'https://github.com/Mateodiaz401',
      name: 'Github'
    },
    {
      src: 'mailto:mateodiaz401@gmail.com',
      name: 'Contacto'
    }
  ]
  constructor() { }
  ngOnInit(): void {

  }
}
