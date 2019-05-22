import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class RegformModel{
  public formData:any=[
    {
      type       : 'text', // Box Type [text | select | radio ]
      label      : 'User Name',
      value      : '',
      validation : [Validators.required],
      uid        : 'name'  // formControlName
    },
    {
      type       : 'password', // Box Type [text | select | radio ]
      label      : 'User Password',
      value      : '',
      validation : [Validators.required,Validators.minLength(3)],
      uid        : 'password'
    },
    {
      type       : 'text', // Box Type [text | select | radio ]
      label      : 'User Mobile',
      value      : '',
      validation : [],
      uid        : 'mobile'
    },
    {
      type       : 'text', // Box Type [text | select | radio ]
      label      : 'User Location',
      value      : '',
      validation : [],
      uid        : 'location'
    }
  ];
}
