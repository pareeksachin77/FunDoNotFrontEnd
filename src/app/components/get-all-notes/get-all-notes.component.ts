import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  constructor(private note: NoteserviceService) { }

  ngOnInit(): void {
    this.note.getAllNotes();
  }
  getAllNotes(){
    this.note.getAllNotes().subscribe((res:any)=>{
      console.log(res)
    },error=>{
      console.log(error)
    })
  }

}
