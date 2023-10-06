import { Component, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { ProjectDataService } from '../services/project-data.service';
import { Independent } from '../services/projects-data-model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'independent-projects',
  templateUrl: './independent-projects.component.html',
  styleUrls: ['./independent-projects.component.css']
})
export class IndependentProjectsComponent {

  dataSource = new MatTableDataSource<Independent>();
  displayedColumns: string[] = ['name', 'path', 'references'];

  constructor(private projectDataService: ProjectDataService) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.projectDataService.getIndependentProjects().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
