import { Injectable } from '@angular/core';

@Injectable()
export class StorageService{
  private datas:any={};
  constructor(){
    this.initiateLocalStorage();
  }
  initiateLocalStorage(){
    let obj = localStorage.getItem('myStorage');
    if(obj=='' || obj==undefined || obj==null ||obj=='[]'){
      this.datas={};
    }else{
      this.datas= JSON.parse( obj );
    }
  }
  set(obj:any){
    let obj_keys = Object.keys( obj );
    ( obj_keys ).forEach( (item)=>{
      this.datas[item] = obj[item];
    } );

  //  console.log( this.datas ,JSON.stringify(this.datas) );
   this.storeJSon( this.datas );

  }
  storeJSon(obj:any){
     localStorage.setItem('myStorage', JSON.stringify(this.datas) );
  }
  get(key:string){
    if(key==''){
      return this.datas;
    }else{
       if( this.datas[key] ){
         return this.datas[key];
       }
    }
  }

remove(key:string){
  delete (this.datas)[key];

  this.storeJSon( this.datas );

}


}
