import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
token:any;
  constructor(private http:HttpService) { this.token = localStorage.getItem('token')}
  createnote(data:any){
    console.log(this.token)
    console.log(data)
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.token
      })
      
    }
    return this.http.postservice('https://localhost:44391/api/Notes/Create',data,true,header)
  }
}
