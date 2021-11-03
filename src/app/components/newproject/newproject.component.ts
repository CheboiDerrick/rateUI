import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/shared/services/projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  form:any;
  message:any
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private projectsService: ProjectsService) { 

  }


  ngOnInit(): void {
    this.form = new FormGroup({
      'title':new FormControl('', [Validators.required]),
      // 'image': new FormControl('', [Validators.required]),
      'description':new FormControl('', [Validators.required]),
      'link': new FormControl('', [Validators.required]),
    });
  }

  get f(){
    return this.form.controls;
  }

  onSelectedFile(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
      console.log(this.form.get('image').value);
    }
  }

  onSubmit() {
    console.log(this.form.value)
    this.projectsService.postProject(this.form.value).subscribe(response => {
      this.message=response
      console.log(this.message)
   })
  }
}
