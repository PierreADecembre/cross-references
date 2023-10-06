import { Component, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { ProjectDataService } from '../services/project-data.service';
import { CrossDependency } from '../services/projects-data-model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'cross-dependency-projects',
  templateUrl: './cross-dependency-projects.component.html',
  styleUrls: ['./cross-dependency-projects.component.css']
})
export class CrossDependencyProjectsComponent {
  dataSource = new MatTableDataSource<CrossDependency>();
  displayedColumns: string[] = ['name', 'path', 'crossDependencyReferences'];

  constructor(private projectDataService: ProjectDataService) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.projectDataService
        .getCrossDependencyProjects()
        .subscribe(data => {
          //console.log(data);
          this.dataSource.data = data;
    });
  }
}
