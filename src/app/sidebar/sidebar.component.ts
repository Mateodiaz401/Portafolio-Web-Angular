import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GithubService } from '../github.service';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'https://youtube.com/@mateodiaztecnotec',
      icon: '<i class="uil uil-youtube"></i>'
    },
    {
      link: 'https://github.com/Mateodiaz401',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'mailto:mateodiaz401@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
  ];
  dataProfile: any;

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.gitHubService.getRepo()
      .subscribe(res => this.dataProfile = res);
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer
      .changeCursorColor('white')
      .type('Mateo Díaz')
      .rest(50000)
      .clear()
      .type('¿Ya viste mis videos?')
      .rest(2000)
      .start();

  };

}


class LinkModel {
  link: string;
  icon: string;
}
