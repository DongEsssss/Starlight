import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  SideNavigationMoveEvent = new EventEmitter();
  LoadCommonDataEvent = new EventEmitter();

}
