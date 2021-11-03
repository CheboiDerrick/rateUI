import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    login: null,
    password: null,
  };
  
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService) { }

  onSubmit() {
    const { login, password } = this.form;
    console.log(this.form)
    this.authService.loginUser(login, password)
  }

  ngOnInit(): void {
  }

}
