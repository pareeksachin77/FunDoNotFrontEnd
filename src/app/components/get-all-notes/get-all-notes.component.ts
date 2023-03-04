import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesArray:any;

  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    console.log('hello');
    this.note.getAllNotes().subscribe((res:any)=>{
      console.log('data notes',res)
      this.notesArray = res.data;
    },error=>{
      console.log(error)
    })
  }

}
