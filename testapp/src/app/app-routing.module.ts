import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guard/auth.guard';

import { RouterModule, Routes } from '@angular/router';
import { UserlistingComponent } from './userlisting/userlisting.component';

import { PatientDetailComponent } from './patient-detail/patient-detail.component';


const routes: Routes = [
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'},
  {component:PatientDetailComponent,path:'patient',canActivate:[AuthGuard]},
  {component:HomeComponent,path:'',canActivate:[AuthGuard]},
  {component:UserlistingComponent,path:'user',canActivate:[AuthGuard]},

 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
export class AppRoutingModule { }
