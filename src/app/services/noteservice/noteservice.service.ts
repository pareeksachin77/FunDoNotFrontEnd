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
        'Authorization':'bearer '+this.token
      })
      
    }
    return this.http.postservice('https://localhost:44391/api/Notes/Create',data,true,header)
  }
  getAllNotes(){
    console.log('this is noteservice')
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'bearer '+this.token
      })
    }
    return this.http.getservices('https://localhost:44391/api/Notes/RetrieveAllNote',true,header)
  }
  UpdateNotes(data:any,id:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'bearer '+this.token
      })
  }
  return this.http.putservice('https://localhost:44391/api/Notes/Update?notesId='+ id,data,true,header)
}
ArchieveNote(data: any) {
  console.log(data.notesId);
  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  return this.http.putservice('https://localhost:44391/api/Notes/Archive?notesId='+data.notesId, data, true, header)
}
trashNote(data:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.http.putservice('https://localhost:44391/api/Notes/Trash?notesId='+data.notesId,data,true,header)
  //https://localhost:44391/api/Notes/Trash?notesId=5
}
deleteNotes(data:any){
  let header ={
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.http.deleteservices('https://localhost:44391/api/Notes/Delete?notesId='+data.notesId,true,header)
  //https://localhost:44391/api/Notes/Delete?notesId=12
}
changeNoteColor(data: any) {
  console.log(data)
  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer ' + this.token
    })
  }
  return this.http.putservice('https://localhost:44391/api/Notes/Color?notesId='+data.notesId+'&color='+data.color, data, true, header)
  //https://localhost:44391/api/Notes/Color?notesId=4&color=green
}

}

