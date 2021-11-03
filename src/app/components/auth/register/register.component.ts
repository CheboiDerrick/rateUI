import { Component, OnInit } from '@angular/core'; 
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data:any
  form: any = {
    username: null,
    email: null,
    password: null,
    password_confirm: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService) { }

  onSubmit() {
    const { username, email, password, password_confirm } = this.form;
    console.log(this.form)
    this.authService.registerUser(username, email, password, password_confirm).subscribe(response => {
      console.log(response);
      this.data=response;
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    }, err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    })
  }

  ngOnInit(): void {
  }

}
