import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanService } from './service/loan.service';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AddLoanComponent } from './home/add-loan/add-loan.component';
import { EditLoanComponent } from './home/edit-loan/edit-loan.component';
import { AuthGuard } from './service/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent,
    AdminHomeComponent,
    AddLoanComponent,
    EditLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoanService,AuthService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
