import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector:'template-form',
  template:`
    <form #loginForm="ngForm" class="forms" (ngSubmit)="send(loginForm)"> <!-- Form Group  -- LoginForm -->
      <div>
        <label>Name</label> <br>
        <input [(ngModel)]="name" name="uname" required #lname="ngModel" />
        <div *ngIf="lname.touched && lname.invalid" class="error">Name must</div> {{lname.value}}
      </div>
      <div>
        <label>Password</label> <br>
        <input [(ngModel)]="password" name="upassword" required #lpassword="ngModel"/>
        <div *ngIf="lpassword.touched && lpassword.invalid" class="error">Password must</div>
      </div>
      <div>
        <button>Login</button>
      </div>
    <!--  <div *ngIf="loginForm.touched && loginForm.invalid" class="error">Form seems to be invalid!</div> -->
    </form>

  `,
  styles:[`
        input,button{
          margin:3px; padding: 3px; border: 1px solid silver;
        }
        .error{ color: red; margin: 3px; }

       .forms .ng-invalid.ng-touched{ border-left: 2px solid red; }

    `]
})

export class TemplateForm{
   send(loginForm:any){
     if(loginForm.valid){
        console.log('Submitted.......',loginForm.value);
      }
   }
}
