import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId:number;
  user:User;
  usernameGlobal:String;
  constructor(private httpClient: HttpClient) { }
  setuserIdGloabal(id:number){
    this.userId=id;
  }
  setusernameGloabal(username:String){
    this.usernameGlobal=username;
  }
  getuserIdGlobal(){
    return this.userId;
  }
  getusernameGlobal(){
    return this.usernameGlobal;
  }

  loginuser( username: string, password: string):Observable<User[]>{
    // return this.httpClient.get<User[]>('http://localhost:3000/user?username='+username+'&password='+password+'&userid='+this.userId);
    return this.httpClient.get<User[]>('http://localhost:8086/userService/authenticate?username='+username+'&password='+password);
  }

  getUserByUserid(userid:number):Observable<User[]>{
    // return this.httpClient.get<User[]>('http://localhost:3000/user?id='+userid);
    return this.httpClient.get<User[]>('http://localhost:8086/userService/getUser?id='+userid);
  }
}
