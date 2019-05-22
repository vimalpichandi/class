import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'template-form',
  template: `

<form #loginForm="ngForm" class="form" (ngSubmit)="send(loginForm)">
   <div>
     <label>Name</label> <br>
     <input [(ngModel)]="name" name="uname" #lname="ngModel" required  />
      <div *ngIf="lname.touched && lname.invalid" class="error"> * Name must !  </div>
   </div>
   <div>
     <label>Password</label> <br>
     <input [(ngModel)]="password" name="upassword" #lpassword="ngModel" required />
      <div *ngIf="lpassword.touched && lpassword.invalid" class="error"> * Password must !  </div>
   </div>

   <button>Login</button>

<!--  <div *ngIf="loginForm.touched && loginForm.invalid" class="error"> * Form fields must !  </div> -->
</form>

  `,
  styles:[`
       .error{ color: red; margin: 5px; }
       input{ border: 1px solid silver; }
       .form .ng-touched.ng-invalid{ border-left:2px solid red; }
    `]
})
export class TemplateForm{
   public name:string='';
   public password:string='';
   send(loginForm:any){
     if(loginForm.valid){
        console.log('submitted.....',loginForm.value);
     }
   }
}
