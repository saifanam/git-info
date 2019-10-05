import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitinfoService } from '../gitinfo.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  private projectList: any;
  private userHandle: string;
  private errorText: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private gitinfoService: GitinfoService
  ) { }

  loadProjects() {
    this.errorText = '';
    this.userHandle = this.activatedRoute.snapshot.paramMap.get('userHandle');
    this.gitinfoService.changeInfo('');
    this.gitinfoService.loadProjects(this.userHandle).subscribe((response) => {
      this.projectList = response;
    },
    (error) => {
      this.errorText = error.statusText;
    });
  }

  gotoReadme(projectName) {
    this.router.navigate([`${this.userHandle}/${projectName}`]);
  }

  ngOnInit() {
    this.loadProjects();
  }

}
