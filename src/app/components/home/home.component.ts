import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/shared/services/projects.service';
import { IProject } from 'src/app/interfaces/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects:IProject[]=[]

  constructor(private _projectsService:ProjectsService) {
    console.log('Project service started...')
   }

   getProjects(){
     this._projectsService.getAllProjects().subscribe((response: any)=>{
      console.log(response)
      this.projects=response;
       console.log(this.projects)
     });
   }
  ngOnInit(): void {
    this.getProjects()
  }

}
