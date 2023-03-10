import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  NotesList: any;
  notesArray:any;

  constructor(private note:NoteserviceService) { }

  ngOnInit(): void {
    this.TrashNotes();
  }
  TrashNotes(){
    this.note.getAllNotes().subscribe((response:any)=>{
      console.log(response.data)
      this.notesArray=response.data;
      this.notesArray.reverse();
    this.notesArray=this.notesArray.filter((object :any)=>{
      return object.trash===true;
    })
    },error=>{
      console.log(error)
    })
  }

}
