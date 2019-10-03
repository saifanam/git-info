import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitinfoService {
  baseUrl: string = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  loadProjects(userHandle) {
    return this.http.get(`${this.baseUrl}/users/${userHandle}/repos`);
  }
}
