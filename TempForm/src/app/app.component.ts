import { Component } from '@angular/core';
import { StorageService } from './services/storage';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api';



@Component({
  selector:'app-root',
  template:`
  <router-outlet></router-outlet>
  <!--   <input [(ngModel)]="name" /> <input [(ngModel)]="val" /> <button (click)="send()">Click</button>
     <button (click)="find();">Find</button>
     <button (click)="delete()">Delete</button>
     <img src="assets/images/sample.gif" />
     -->
 
<h1>Template driven form</h1>
<form #loginForm="ngForm"  class="myForm" (ngSubmit)="formSubmit(loginForm)" >
 <div>
   <input  [(ngModel)]="email" name="uemail" #lemail="ngModel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
   <span *ngIf="lemail.touched && lemail.invalid" class="error">
    Email error !
   </span>
 </div>
 <div>
  <input   type="password" [(ngModel)]="password" name="upassword" #lpassword="ngModel" required/>
  <div *ngIf="lpassword.touched && lpassword.invalid" class="error">
     Password !
  </div>
 </div>


 <button>Submit</button>
 <!-- <div *ngIf="loginForm.touched && loginForm.invalid" class="error">
    Something went Wrong !
 </div> -->
</form>



<h2>Register</h2>

<form #regiForm="ngForm"  class="myForm" (ngSubmit)="formRegi(regiForm)" >
 <div>
   <input  [(ngModel)]="remail" name="uemail" #lemail="ngModel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
   <span *ngIf="lemail.touched && lemail.invalid" class="error">
    Email error !
   </span>
 </div>

 <div>
  <input   type="password" [(ngModel)]="rpassword" name="upassword" #lpassword="ngModel" required/>
  <div *ngIf="lpassword.touched && lpassword.invalid" class="error">
     Password !
  </div>
 </div>

 <div>
   <input  [(ngModel)]="rname" name="uname" #lname="ngModel" required />
   <span *ngIf="lname.touched && lname.invalid" class="error">
    name error !
   </span>
 </div>

 <div>
   <input  [(ngModel)]="mnumber" name="umnumber" #lmnumber="ngModel" required />
   <span *ngIf="lmnumber.touched && lmnumber.invalid" class="error">
    number error !
   </span>
 </div>

 <button>Submit</button>
 <!-- <div *ngIf="regiForm.touched && regiForm.invalid" class="error">
    Something went Wrong !
 </div> -->
</form>

  `,
  styles:[`
        input,button{
          padding: 3px; margin:3px; border: 1px solid silver;
        }
        .error{ color: red; }
        .myForm .ng-touched.ng-invalid{
          border-left: 3px solid red;
        }
        .myForm .ng-touched.ng-valid{
          border-left: 3px solid green;
        }
    `]
})
export class AppComponent{

  public name:string=''; public val:string='';

  constructor( public storage:StorageService,public api:ApiService){
  //  console.log(this.regModel);
  }

  formSubmit(loginForm:any){
    if(loginForm.valid){
    //  alert('Submitted....');
    console.log('Submitted',loginForm.value);
       this.api.login(loginForm.value).then( (res:any)=>{
        //  console.log('resss',res);
        if(res.status=="success"){
        //alert('Login Success');
        window.location.href="/accounts";
      }else{
        alert('Login Failed');
      }
     } )
    }

  }



  formRegi(regiForm:any){
    if(regiForm.valid){
    //  alert('Submitted....');
    console.log('Submitted',regiForm.value);
       this.api.register(regiForm.value).then( (res:any)=>{
        //  console.log('resss',res);
        if(res.status=="success"){
        alert('Register Success');
      }else{
        alert('Register Failed');
      }
     } )
    }

  }

send(){
  let obj = [];
  obj[this.name]=this.val;
  this.storage.set(obj);
}

find(){
  console.log( this.storage.get('') )
}

delete(){
  this.storage.remove( this.name );
}


}
