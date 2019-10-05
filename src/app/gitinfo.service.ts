import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitinfoService {
  baseUrl: string = 'https://api.github.com';
  private infoSource = new BehaviorSubject<string>('');
  currentInfo = this.infoSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  changeInfo(info: string) {
    this.infoSource.next(info);
  }

  loadProjects(userHandle) {
    return this.http.get(`${this.baseUrl}/users/${userHandle}/repos`);
  }
}
