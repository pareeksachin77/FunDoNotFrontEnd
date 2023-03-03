import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/services/noteservice/noteservice.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteForm !: FormGroup;
  submitted = false;
  show=false;
  constructor(private fb: FormBuilder, private note: NoteserviceService) { }

  ngOnInit(): void {
    this.createnoteForm=this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  isShow(){
    this.show=true;
  }

  close():void{
    this.show=false;

    if(this.createnoteForm.valid){
      console.log("valid data",this.createnoteForm.value);
      console.log("do api call");
      let abcd={
        title:this.createnoteForm.value.title,
        description:this.createnoteForm.value.description
      }
      this.note.createnote(abcd).subscribe((res:any)=>{
        console.log(res)
      },error=>{
        console.log(error)
      })

    }else{
      console.log("Invalid data",this.createnoteForm.value);
      console.log("no api call");
    }
  }

}
