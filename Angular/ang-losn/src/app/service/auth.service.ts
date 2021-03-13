import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean=false;
  constructor() { }
  setloggedIn(){
    this.isLoggedIn=true;
  }
  setlogout(){
    this.isLoggedIn=false;
  }
  getisLoggedin(){
    return this.isLoggedIn;
  }



}
