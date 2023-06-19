import {Component, ViewChild} from '@angular/core';
import { NoticeComponent } from '../../modals/notice/notice.component';
import { UserComponent } from '../../configuration/user/user.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  collapsed: boolean = true;
  @ViewChild('userprofilemodal', {static: false}) UserProfile !: UserComponent
  @ViewChild('noticeboardmodal', {static: false}) NoticeBoard !: NoticeComponent

  userinfo() {
    this.UserProfile.open();
  }

  noticeboard() {
    this.NoticeBoard.open();
  }


}
