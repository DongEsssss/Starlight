import {Component, ViewChild} from '@angular/core';
import { NoticeComponent } from '../../modals/notice/notice.component';
import { DefaultComponent } from 'src/app/components/default.component';
import { InfoComponent } from '../../modals/info/info.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends DefaultComponent{
  collapsed: boolean = true;
  @ViewChild('userprofilemodal', {static: false}) UserProfile !: InfoComponent
  @ViewChild('noticeboardmodal', {static: false}) NoticeBoard !: NoticeComponent

  myinfo() {
    this.UserProfile.open();
  }

  notice() {
    this.NoticeBoard.open();
  }

}
