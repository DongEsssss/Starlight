import { Component, ViewChild } from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { camp } from 'src/app/models/Camp';
import { Card } from 'src/app/models/Card';
import { Dudtnwmd2Component } from 'src/app/views/modals/dudtnwmd2/dudtnwmd2.component';
import { Dudwnwmd1Component } from 'src/app/views/modals/dudwnwmd1/dudwnwmd1.component';

@Component({
  selector: 'app-usecard',
  templateUrl: './usecard.component.html',
  styleUrls: ['./usecard.component.css']
})
export class UsecardComponent extends DefaultComponent {
  @ViewChild('cDataGrid', {static: true}) cDataGrid !: ClrDatagrid;
  campList : camp[] = []
  cDataLoading : boolean =false;
  cSelection?:any;
  keyword?: string;
  searchText: string = '';

  columnDefs = [
    {headerName:'예약자', field:'noticeTitle', type:'text'},
    {headerName:'캠핑장', field:'noticeMessage', type:'text', minWidth: 300},
    {headerName:'예약날짜', field:'createDte', type:'text'},
    {headerName:'가격', field:'price', type:'text'},
  ];

  async getcamp() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getcamp().subscribe((resp: any) => {
      this.campList = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
    });
  }
  @ViewChild('tnwmd1', {static: false}) tnwm1 !: Dudwnwmd1Component;
  @ViewChild('tnwmd2', {static: false}) tnwm2 !: Dudtnwmd2Component;
  dudwnwmd(id: any) {
    console.log(id)
    this.id = id;
    if(id=="1"){
      this.tnwm1.open()
    }else{
      this.tnwm2.open()
    }
  }
}
