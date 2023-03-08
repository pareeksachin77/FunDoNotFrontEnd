import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
    submitted = false;
    constructor(private fb:FormBuilder,private user:UserService, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log("valid data",this.loginForm.valid);
      console.log("do api call");
      let abcd={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.user.login(abcd).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem("token", res.data);
        this.router.navigateByUrl('/dashboard/notes')
        
      },error=>{
        console.log(error)
        
      })
      this._snackBar.open('logged in successfully');
    }
    
    else{
      console.log("Invalid data",this.loginForm.value);
      console.log("no api call");
    }
  }


}
