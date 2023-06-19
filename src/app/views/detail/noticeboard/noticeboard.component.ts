import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { noticeas } from 'src/app/models/Noticeboard';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css'],
})
export class NoticeboardComponent extends DefaultFormComponent<noticeas> {
  noticeList: noticeas[] = [];

  @Input() override item: any;
  @Input() override id: any;

  ngOnChanges(): void {
    if (this.item) {
      this.noticeList[0] = this.item;
    }
  }
}
