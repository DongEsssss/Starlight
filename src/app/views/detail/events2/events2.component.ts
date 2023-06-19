import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { event3, events3 } from 'src/app/models/Eventboard copy 2';

@Component({
  selector: 'app-events2',
  templateUrl: './events2.component.html',
  styleUrls: ['./events2.component.css']
})
export class Events2Component extends DefaultModalComponent<event3>{
  item = events3;
  events3 : event3[];
}
