import { Component, OnInit } from '@angular/core';
import { GitinfoService } from './gitinfo.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'git-info';

  private currentInfo: string;

  constructor(
    private gitinfoService: GitinfoService,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && this.router.url === '/') {
        this.gitinfoService.changeInfo('');
      }
    });
  }

  ngOnInit() {
    this.gitinfoService.currentInfo.subscribe((info) => {
      this.currentInfo = info;
    });
  }
}
