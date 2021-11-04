import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    let User = localStorage.getItem("currentUser");
    console.log(User)
  }

  onLogout(){
      this.authService.logoutUser();
  }

}
