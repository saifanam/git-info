import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent }  from './user-search/user-search.component';
import { ProjectListComponent }  from './project-list/project-list.component';
import { ViewReadmeComponent }  from './view-readme/view-readme.component';

const routes: Routes = [
  { path: '', component: UserSearchComponent },
  { path: ':userHandle', component: ProjectListComponent },
  { path: ':userHandle/:projectName', component: ViewReadmeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
