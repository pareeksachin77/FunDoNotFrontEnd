import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service'; 
import { ArchieveComponent } from '../archieve/archieve.component';
import { DisplayNoteComponent } from '../display-note/display-note.component';

@Component({
  selector: 'app-iconcomp',
  templateUrl: './iconcomp.component.html',
  styleUrls: ['./iconcomp.component.scss']
})
export class IconcompComponent implements OnInit {
  isTrashed: any;
  isArchived: any;
  @Input() notecomp: any

  colors: Array<any> =[
      { code: '#fff', name: 'white' },
      { code: '#f28b82', name: 'red' },
      { code: '#fbbc04', name: 'orange' },
      { code: '#FFFF00', name: 'yellow' },
      { code: '#ccff90', name: 'green' },
      { code: '#a7ffeb', name: 'teal' },
      { code: '#cbf0f8', name: 'Blue' },
      { code: '#aecbfa', name: 'darkblue' },
      { code: '#d7aefb', name: 'purple' },
      { code: '#fdcfe8', name: 'pink' },
      { code: '#e6c9a8', name: 'brown' },
      { code: '#e8eaed', name: 'grey' },
  ];


  constructor(private note: NoteserviceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isArchived= this.notecomp.archive,
    this.isTrashed=this.notecomp.trash
  }
  onArchieve(){
    this.isArchived = false;
    let reqdata = {
      notesId: [this.notecomp.noteID]
  }
    console.log(reqdata);
    this.note.ArchieveNote(reqdata).subscribe((response: any) => {
      console.log(response)
    })
    let snackBarRef = this._snackBar.open('note is in Archive---');
  }
  unarchive(){
    this.isArchived = true;
    let reqdata = {
      notesId: [this.notecomp.noteID]
  }
    console.log(reqdata);
    this.note.ArchieveNote(reqdata).subscribe((response: any) => {
      console.log(response)
    })
    let snackBarRef = this._snackBar.open('note is in UnArchive---');
  }

  trash(){
    this.isTrashed = false;
    let reqdata = {
      notesId:[this.notecomp.noteID]
    }
    console.log(reqdata);
    this.note.trashNote(reqdata).subscribe((response : any)=>{
      console.log(response)
    })
    let snackBarRef = this._snackBar.open('note is in Trash---');
  }
  restore(){
    this.isTrashed = false;
    let reqdata={
      notesId:[this.notecomp.noteID]
    }
    console.log(reqdata);
    this.note.trashNote(reqdata).subscribe((response:any)=>{
      console.log(response)
    })
    let snackBarRef = this._snackBar.open('note is Restored---');
  }
  delete(){
    let reqdata={
      notesId:[this.notecomp.noteID]
    }
    console.log(reqdata);
    this.note.deleteNotes(reqdata).subscribe((response : any)=>{
      console.log(response)
    })
    let snackBarRef = this._snackBar.open('note deleted permanantly---');
  }
 

  setColor(color: any) {

    // console.log('color', color);
     //console.log(this.noteCard);
 
     this.notecomp.color=color;
     //console.log('color', color);
     let reqdata = {
       color: color,
       notesId: [this.notecomp.noteID],
     }
     console.log(reqdata)
     this.note.changeNoteColor(reqdata).subscribe((response: any) => {
       console.log(response);
 
     })
   }

   

}
