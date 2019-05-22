import { Component,Input } from '@angular/core';
import{ FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector:'box',
  template: `
     <div [formGroup]="dynamicForm">
       <div *ngFor="let data of __datas">
         <div *ngIf="data.inputType=='text'">
           <label>{{data.label}}</label> <br>
           <input type="text" formControlName="{{data.uid}}" />
         </div>
         <div *ngIf="data.inputType=='password'">
           <label>{{data.label}}</label> <br>
           <input type="password" formControlName="{{data.uid}}" />
         </div>
       </div>
       <button (click)="send()">Submit</button>
     </div>
  `
})

export class DynamicForm{
   @Input('datas') __datas:any;
   public dynamicForm:any;
   constructor(public fb:FormBuilder){

   }
   ngOnInit(){
     this.loadForm();
   }
   loadForm(){
     let controlObj:any = [];
     (this.__datas).forEach( (data)=>{
       controlObj[data.uid] = [data.value,data.validations];
     } );
     this.dynamicForm = this.fb.group( controlObj );
   }
   send(){
     if(this.dynamicForm.valid){
       console.log('Form Valid',this.dynamicForm.value);
     }else{
       console.log('Form Invalid...');
     }
   }
}
