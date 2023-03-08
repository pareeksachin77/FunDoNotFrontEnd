import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() NotesList: any;
  constructor(public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      height: '150px',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

