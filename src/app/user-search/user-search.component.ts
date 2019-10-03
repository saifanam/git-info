import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  gotoProjects($event) {
    if ($event.keyCode === 13) {
      this.router.navigate([`/${$event.target.value}`]);
    }
  }

  ngOnInit() {
  }

}
