import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLoanComponent } from './home/add-loan/add-loan.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { EditLoanComponent } from './home/edit-loan/edit-loan.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'add-loan',component:AddLoanComponent,canActivate:[AuthGuard]},
  {path:'home-page',component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'admin-home',component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'edit-loan', component: LoginComponent},
  {path:'edit-loan/:id',component:EditLoanComponent,canActivate:[AuthGuard]}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
