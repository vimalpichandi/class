import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
//import { ReactiveForm } from './directives/reactive-form/reactiveForm';
import { accountcls } from './directives/AccountFold/Account';
import { RegformModelServive } from './model/regform.model';
import { DynamicForm } from './directives/dynamic-form/dynamic-form';

import{ DemoComponent } from './directives/demo/demo';
import { StorageService } from './services/storage';
import { ApiService } from './services/api';


const appRoutes: Routes = [
  { path: '', component:AppComponent},
  { path: 'accounts', component: accountcls },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,DemoComponent,DynamicForm , accountcls
  ],
  imports: [ BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule,RouterModule.forRoot( appRoutes,
      { enableTracing: false, useHash:false} // <-- debugging purposes only
    ) ],
  providers: [ RegformModelServive,StorageService,ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
