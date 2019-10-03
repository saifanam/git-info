import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitinfoService } from '../gitinfo.service';

@Component({
  selector: 'app-view-readme',
  templateUrl: './view-readme.component.html',
  styleUrls: ['./view-readme.component.scss']
})

export class ViewReadmeComponent implements OnInit {

  private readmeLoaded: boolean = false;
  private readmeContent: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private gitinfoService: GitinfoService
  ) { }

  ngOnInit() {
    this.renderReadme();
  }

  renderReadme(): void {
    const userHandle = this.activatedRoute.snapshot.paramMap.get('userHandle');
    const projectName = this.activatedRoute.snapshot.paramMap.get('projectName');
    this.readmeContent = `https://raw.githubusercontent.com/${userHandle}/${projectName}/master/README.md`;
  }

  onLoad($event): void {
    this.readmeLoaded = true;
  }

  onError($event): void {

  }

}
