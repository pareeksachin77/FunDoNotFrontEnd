import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  postservice(url:any,data:any,token:boolean=false,options:any){
    return this.httpclient.post(url,data,token && options)
  }
  getservices(url:any,token:boolean=false,options:any){
    console.log('this is httpservice')
    return this.httpclient.get(url,token && options)
  }
  putservice(url:any,data:any,token:boolean=true,options:any){
    return this.httpclient.put(url,data,token && options)
  }
}
