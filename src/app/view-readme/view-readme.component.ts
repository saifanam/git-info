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
  private userHandle: string;
  private projectName: string;
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
    this.userHandle = this.activatedRoute.snapshot.paramMap.get('userHandle');
    this.projectName = this.activatedRoute.snapshot.paramMap.get('projectName');
    this.readmeContent = `https://raw.githubusercontent.com/${this.userHandle}/${this.projectName}/master/README.md`;
  }

  onLoad($event): void {
    this.readmeLoaded = true;
  }

  onError($event): void {

  }

}
