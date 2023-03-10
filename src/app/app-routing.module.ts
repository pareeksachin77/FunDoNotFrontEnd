import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IconcompComponent } from './components/iconcomp/iconcomp.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { TrashNoteComponent } from './components/trash-note/trash-note.component';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
   children:[
    {path:'notes',component:GetAllNotesComponent},
    {path:'reminder',component:RegisterComponent},
    {path:'archive',component:ArchieveComponent},
    {path:'trash',component:TrashNoteComponent},
   ]

  },
  {path:'create-note',component:CreateNoteComponent},
  {path:'iconcomp',component:IconcompComponent},
  {path:'displaynote',component:DisplayNoteComponent},
  {path:'**',component:CustomErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
