import { Injectable }  from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class RegformModelServive{
   public formdatas:any=[
     {
       inputType:'text',
       label: 'User Name',
       value: '',
       validations: [Validators.required],
       uid: 'name'
     },
     {
       inputType:'password',
       label: 'User Password',
       value: '',
       validations: [Validators.required,Validators.minLength(3)],
       uid:'password'
     },
     {
       inputType:'text',
       label: 'Mobile',
       value: '',
       validations: [],
       uid:'mobile'
     }
   ];
}
