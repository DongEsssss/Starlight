import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';
import {Noticeboard} from 'src/app/models/notice';

;


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})

export class NoticeComponent extends DefaultModalComponent<Noticeboard> {
  name: any;
  writer: any;
  htmlContent = '';
}
