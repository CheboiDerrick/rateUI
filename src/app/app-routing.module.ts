import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NewprojectComponent } from './components/newproject/newproject.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'newproject', component: NewprojectComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
