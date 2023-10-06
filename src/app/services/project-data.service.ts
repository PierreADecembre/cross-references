import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CrossDependency, Independent, ProjectData } from './projects-data-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private dataUrl = 'assets/app_data/solution_dependency.json';

  constructor(private http: HttpClient) {}

  getProjectData(): Observable<ProjectData> {
    return this.http.get<ProjectData>(this.dataUrl);
  }

  getCrossDependencyProjects(): Observable<CrossDependency[]> {
    return this.getProjectData().pipe(
      map(data => data.crossDependency)
    );
  }
  getIndependentProjects(): Observable<Independent[]> {
    return this.getProjectData().pipe(
      map(data => data.independent)
    );
  }

}
