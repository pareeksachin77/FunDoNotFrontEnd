import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm !: FormGroup;
      submitted = false;
      constructor(private fb:FormBuilder,private user:UserService) { }

      ngOnInit(): void {
        this.forgetPasswordForm=this.fb.group({
          email:['',[Validators.required,Validators.email]],
        })
      }
  onSubmit(){
    if(this.forgetPasswordForm.valid){
      console.log("valid data",this.forgetPasswordForm.value);
      console.log("do api call");
      let abcd={
        email:this.forgetPasswordForm.value.email,
      }
       this.user.forgetPassword(abcd).subscribe((res:any)=>{
        console.log(res)
      },error=>{
         console.log(error)
      }) 
    } 
    else{
      console.log("Invalid data",this.forgetPasswordForm.value);
      console.log("no api call");
    }
  }

}
