import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrossDependencyProjectsComponent } from './cross-dependency-projects/cross-dependency-projects.component';
import { IndependentProjectsComponent } from './independent-projects/independent-projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'independent-projects', pathMatch: 'full' },
  { path: 'independent-projects', component: IndependentProjectsComponent },
  { path: 'cross-dependency-projects', component: CrossDependencyProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
