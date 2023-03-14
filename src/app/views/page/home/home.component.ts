import {Component, ViewChild} from '@angular/core';
import {NoticeBoardComponent} from '../../modal/notice-board/notice-board.component';
import {PasswordChangeComponent} from '../../modal/password-change/password-change.component';
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
  @ViewChild('passwordmodal', {static: false}) PasswordSetting !: PasswordChangeComponent

  userinfo() {
    this.UserProfile.open();
  }

  noticeboard() {
    this.NoticeBoard.open();
  }

  password() {
    this.PasswordSetting.open();
  }
}
