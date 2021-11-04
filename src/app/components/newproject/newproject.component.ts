import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  form: any;
  message: any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  title: string = ''
  description: string = ''
  image: any = ''
  link: any = ''

  constructor(private projectsService: ProjectsService) {

  }


  ngOnInit(): void {
    // this.form = new FormGroup({
    //   'title': new FormControl('', [Validators.required]),
    //   // 'image': new FormControl('', [Validators.required]),
    //   'description': new FormControl('', [Validators.required]),
    //   'link': new FormControl('', [Validators.required]),
    // });
  }

  get f() {
    return this.form.controls;
  }

  onImageChange(event: any) {
    this.image = event.target.files[0]
  }

  onSubmit() {
    let projectForm= new FormData();
    projectForm.append('title', this.title)
    projectForm.append('description', this.description)
    projectForm.append('link', this.link)
    projectForm.append('image', this.image)
    console.log(projectForm)
    this.projectsService.postProject(projectForm)
  }
}
