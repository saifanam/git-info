import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitinfoService } from '../gitinfo.service';

@Component({
  selector: 'app-view-readme',
  templateUrl: './view-readme.component.html',
  styleUrls: ['./view-readme.component.scss']
})

export class ViewReadmeComponent implements OnInit {

  private showLoading: boolean = true;
  private isError: boolean = false;
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
    const userHandle = this.activatedRoute.snapshot.paramMap.get('userHandle');
    this.projectName = this.activatedRoute.snapshot.paramMap.get('projectName');
    this.readmeContent = `https://raw.githubusercontent.com/${userHandle}/${this.projectName}/master/README.md`;
  }

  onLoad($event): void {
    this.showLoading = false;
    this.gitinfoService.changeInfo(this.projectName);
  }

  onError($event): void {
    this.showLoading = false;
    this.isError = true;
  }

}
