import { HomeComponent } from './userprofile/home/home.component';
import { Always } from './always';
import { FavouriteComponent } from './userprofile/favourite/favourite.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



 
const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [Always]},
  {path: 'home', component: HomeComponent, canActivate: [Always]},
  {path: 'register', component: RegisterComponent , canActivate: [Always]},
  {path: 'favourite', component: FavouriteComponent, canActivate: [Always]},
  {path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[Always],
  exports: [RouterModule]
})
export class AppRoutingModule { }
