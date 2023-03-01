import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  register(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.postservice('https://localhost:44391/api/User/UserRegistration',data,false,header)
  }
  login(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
     }
     return this.http.postservice('https://localhost:44391/api/User/UserLogin',data,false,header)
  }
  forgetPassword(data:any){
    let header={
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    }
    return this.http.postservice('https://localhost:44391/api/User/ForgotPassword?email='+(data.email),data,false,header)
  }
}
