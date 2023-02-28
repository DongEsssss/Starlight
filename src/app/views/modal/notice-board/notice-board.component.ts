import { Component, ViewChild } from '@angular/core';
import { Noticeboard, notices } from 'src/app/models/notice';
import { DeleteComponent } from 'src/app/views/modal/delete/delete.component';
import { NoticeComponent } from 'src/app/views/modal/notice/notice.component';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent extends DefaultModalComponent<Noticeboard>{
  notices = notices
  selected: any[]=[];
  @ViewChild('noticemodal', {static:false}) Notice !: NoticeComponent
  @ViewChild('deletemodal', {static:false}) Delete !: DeleteComponent
  notice(){
    this.Notice.open();
  }
  onDelete(){
    this.Delete.open();
  }
}
