import { Component, ViewChild } from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { Noticeboard, notices } from 'src/app/models/Noticeboard';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent extends DefaultModalComponent<Noticeboard> {
  @ViewChild('cDataGrid', { static: true }) cDataGrid!: ClrDatagrid;
  cDataLoading: boolean = false;
  page: number = 1;
  totalCount: number = 0;
  cSelection?: any;
  pagenationSize = 99;
  currentFilteredType: number = 0; // all projects
  projectName: string = '';
  noticeList: Noticeboard[] = [];
  searchText!: string;
  notices = notices;

  // notices = notices
  // selected: any[]=[];
  // @ViewChild('noticemodal', {static:false}) Notice !: NoticeComponent
  // @ViewChild('deletemodal', {static:false}) Delete !: DeleteComponent
  // notice(){
  //   this.Notice.open();
  // }
  // onDelete(){
  //   this.Delete.open();
  // }

  columnDefs = [
    { headerName: '공지' },
    { headerName: '글 제목', field: 'noticeMessage', type: 'text', width: 500 },
    { headerName: '작성자' },
    { headerName: '날짜' },
  ];

  getField(notices: Noticeboard, key: string) {
    return notices[key as keyof Noticeboard];
  }

  onRefresh(): void {
    // console.log(this.gridApi.setdatasou');
    // this.gridApi.refreshServerSide();
  }
}
