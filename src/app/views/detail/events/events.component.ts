import { Component, Input} from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { event2, events2 } from 'src/app/models/Eventboard copy';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent extends DefaultModalComponent<event2> {
  item = events2;
  events2 : event2[];

}
