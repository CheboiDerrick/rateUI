import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  isSuccessful = false;
  isSignInFailed = false;
  errorMessage = '';
  data:any;

  constructor(private _http: HttpClient) {
    console.log('Projects service started.....')
  }

  getAllProjects() {
    return this._http.get(`${environment.BASE_URL}projects/`)
  }

  postProject(uploadData:any) {
    return this._http.post(`${environment.BASE_URL}projects/`, { uploadData }, httpOptions)
  }

  getSingleProject(projectId: number) {
    return this._http.get(`${environment.BASE_URL}projects/${projectId}`)
  }

}
