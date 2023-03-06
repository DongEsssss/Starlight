import {Component, ViewChild} from '@angular/core';
import {Noticeboard, notices} from 'src/app/models/notice';
import {CompanyInfoComponent} from 'src/app/views/modal/company-info/company-info.component';
import {DeleteComponent} from 'src/app/views/modal/delete/delete.component';
import {NoticeComponent} from 'src/app/views/modal/notice/notice.component';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.css']
})
export class CpFormComponent {

  notices = notices
  selected: any[] = [];
  @ViewChild('noticemodal', {static: false}) Notice !: NoticeComponent
  @ViewChild('deletemodal', {static: false}) Delete !: DeleteComponent
  @ViewChild('companyinfo', {static: false}) CompanyInfo !: CompanyInfoComponent

  onCompanyEdit() {
    this.CompanyInfo.open()
  }

  notice() {
    this.Notice.open();
  }

  onDelete() {
    this.Delete.open();
  }
}
