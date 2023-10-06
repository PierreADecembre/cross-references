export interface ProjectData {
    crossDependency: CrossDependency[];
    independent: Independent[];
  }
  
  export interface CrossDependency {
    solution: {
      name: string;
      path: string;
      projectsWithCrossDependency: ProjectWithCrossDependency[];
    };
  }
  
  export interface ProjectWithCrossDependency {
    name: string;
    path: string;
    crossDependencyReferences: CrossDependencyReference[];
  }
  
  export interface CrossDependencyReference {
    solution: {
      name: string;
      path: string;
      projects: Project[];
    };
  }
  
  export interface Project {
    name: string;
    path: string;
  }
  
  export interface Independent {
    solution: {
      name: string;
      path: string;
      references: Reference[];
    };
  }
  
  export interface Reference {
    name: string;
    path: string;
  }
  