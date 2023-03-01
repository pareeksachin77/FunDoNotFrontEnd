import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;
    constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      cpassword:['',Validators.required]

    })
  }
  onSubmit(){
    if(this.registerForm.valid){
      console.log("valid data",this.registerForm.value);
      console.log("do api call");
      let abcd={
        firstName:this.registerForm.value.firstname,
        lastName:this.registerForm.value.lastname,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
      }
      this.user.register(abcd).subscribe((res:any)=>{
        console.log(res)
      },error=>{
        console.log(error)
      })

    }else{
      console.log("Invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }
}


