import {Component, ViewChild} from '@angular/core';
import {Noticeboard, notices} from 'src/app/models/notice';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';
import {ClrDatagrid} from '@clr/angular/data/datagrid/datagrid';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent extends DefaultModalComponent<Noticeboard> {
  @ViewChild('cDataGrid', {static: true}) cDataGrid !: ClrDatagrid;
  cDataLoading: boolean = false;
  page: number = 1;
  totalCount: number = 0;
  cSelection?: any;
  pagenationSize = 99;
  currentFilteredType: number = 0; // all projects
  projectName: string = '';
  noticeList: Noticeboard[] = [];
  searchText !: string;


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
    {headerName: 'Number', field: 'noNm'},
    {headerName: 'Title', field: 'assetid'},
    {headerName: 'Content', field: 'policyid'},
    {headerName: 'Writer', field: 'connectorid'},
    {headerName: 'File', field: 'state'},
    {headerName: 'CreateDate', field: 'createdate'},
  ];

  getField(notice: Noticeboard, key: string) {
    return notice[key as keyof Noticeboard];
  }

  onRefresh(): void {
    // console.log(this.gridApi.setdatasou');
    // this.gridApi.refreshServerSide();
  }
}
