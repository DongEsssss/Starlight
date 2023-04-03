import {Component, ViewChild} from '@angular/core';
import {NoticeBoardComponent} from '../../modal/notice-board/notice-board.component';
import {UserInfoComponent} from '../../modal/user-info/user-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  collapsed: boolean = true;
  @ViewChild('userprofilemodal', {static: false}) UserProfile !: UserInfoComponent
  @ViewChild('noticeboardmodal', {static: false}) NoticeBoard !: NoticeBoardComponent

  userinfo() {
    this.UserProfile.open();
  }

  noticeboard() {
    this.NoticeBoard.open();
  }


}
