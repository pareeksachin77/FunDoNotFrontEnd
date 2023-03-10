import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  NotesList: any;
  notesArray:any;

  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.Archieve();
  }
  Archieve(){
    console.log('hello');
    this.note.getAllNotes().subscribe((res:any)=>{
     console.log('data notes',res)
    this.notesArray = res.data;
    this.notesArray.reverse();
    this.notesArray=this.notesArray.filter((object :any)=>{
      return object.archive===true;
    })
    },error=>{
    console.log(error)
    })
  }

}
