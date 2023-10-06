import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CrossDependencyProjectsComponent } from './cross-dependency-projects/cross-dependency-projects.component';
import { IndependentProjectsComponent } from './independent-projects/independent-projects.component';
import { ProjectsLayoutComponent } from './projects-layout/projects-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrossDependencyProjectsComponent,
    IndependentProjectsComponent,
    ProjectsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
