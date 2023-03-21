import { Component,ViewChild, ElementRef, Input } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { MODAL_RES_CANCEL } from 'src/app/utils/shared.utils';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})


export class CancelComponent {
  opened = false

  callback?:DefaultComponent;
  callbackData?:any;

  @Input() set setCallback(callback:DefaultComponent){
    this.callback = callback;
  }

  @Input() set setCallbackData(callbackData:any){
    this.callbackData = callbackData;
  }

  open() {
    this.opened = true;

  }
  close() {
    this.opened = false;
  }

  clear() {
    if(this.callback != undefined){
      this.callback.onModalResponse(MODAL_RES_CANCEL, this.callbackData);
    }
  }
}
