import { Component, ViewChild } from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { NoEnrollmentComponent } from '../../modals/no-enrollment/no-enrollment.component';
import { CancelComponent } from '../../modals/cancel/cancel.component';
import { DefaultComponent } from 'src/app/components/default.component';
import { NoticeComponent } from '../../modals/notice/notice.component';
import { inquiry } from 'src/app/models/inquriy';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-oneonone',
  templateUrl: './oneonone.component.html',
  styleUrls: ['./oneonone.component.css'],
})
export class OneononeComponent extends DefaultComponent {
  @ViewChild('cDataGrid', { static: true }) cDataGrid!: ClrDatagrid;
  cDataLoading: boolean = false;
  override pagenationSize = 99;
  override page: number = 1;
  override totalCount: number = 0;
  cSelection?: any;
  selectionTypeIndex: number = 1;
  keyword?: string;
  inquiry: inquiry[] = [];
  pipe = new DatePipe('createDte');
  createDte = new Date();

  columnDefs = [
    { headerName: '번호', field: 'noticeTitle', type: 'text' },
    { headerName: '내용', field: 'noticeMessage', type: 'text', minWidth: 300 },
    { headerName: '작성자', field: 'userId', type: 'text' },
    { headerName: '등록일', field: 'createDte', type: 'datepicker' },
  ];
  searchText: string;

  override onRefresh(): void {
    this.page = 1;
  }

  @ViewChild('deletemodal', { static: false }) detailmodal!: CancelComponent;
  @ViewChild('addmodal', { static: false }) addmodal!: NoEnrollmentComponent;
  createNotice() {
    this.addmodal.open();
  }
  @ViewChild('noticemodal', { static: false }) Notice!: NoticeComponent;
  notice() {
    this.Notice.open();
  }
  detailnotice(id: string) {
    this.id = id;
    this.restService.getinquirydetail(id).subscribe((resp: any) => {
      this.item = resp;
      console.log(resp);
    });
    this.detailmodal.open();
  }

  async getinquiry() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getinquiry().subscribe((resp: any) => {
      this.inquiry = resp;
      this.totalCount = parseInt(resp.totalCount!);
      this.cDataLoading = false;
    });
  }
}
