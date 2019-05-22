import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
      demo directive {{__datas.name}} - {{__datas.mobile}}
      <input  (change)="myfun($event.target.value)" />
  `
})
export class DemoComponent{
  @Input('dir_datas') __datas:any;
  @Output() dir_op:EventEmitter<string> = new EventEmitter();
  myfun(arg:string){
    this.dir_op.emit(arg);
  }
}
