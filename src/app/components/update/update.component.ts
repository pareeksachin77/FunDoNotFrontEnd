import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
title:any;
desc:any;
notesId:any;
  constructor(private notes: NoteserviceService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log(this.data,this.data.id);
    this.title=this.data.title;
    this.desc=this.data.description;
    this.notesId=this.data.noteID;
  }
  onNoClick(): void {
    let abcd ={ 
      title: this.title,
      description: this.desc,
    }
    this.notes.UpdateNotes(abcd,this.notesId).subscribe((Response: any) => {

      console.log(Response);
    });
    this.dialogRef.close();
  }

  

}
