import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { camp } from 'src/app/models/Camp';
import { CampdetailreserveComponent } from '../../campdetailreserve/campdetailreserve.component';

@Component({
  selector: 'app-reservecamp',
  templateUrl: './reservecamp.component.html',
  styleUrls: ['./reservecamp.component.css'],
})
export class ReservecampComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid', { static: true }) cDataGrid!: ClrDatagrid;
  campList: camp[] = [];
  reserve: camp[] = [];
  cDataLoading: boolean = false;
  cSelection?: any;
  keyword?: string;
  searchText: string = '';

  columnDefs = [
    { headerName: '예약자', field: 'noticeTitle', type: 'text' },
    { headerName: '캠핑장 이름', field: 'userId', type: 'text' },
    {
      headerName: '인원',
      field: 'people',
      type: 'text',
      minWidth: 300,
    },
    { headerName: '예약날짜', field: 'createDte', type: 'text' },
  ];

  async getreserve() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getreserve().subscribe((resp: any) => {
      this.campList = resp;
      this.totalCount = parseInt(resp.totalCount!);
      this.cDataLoading = false;
    });
  }

  @ViewChild('reservedetail', { static: true })
  DetailModal!: CampdetailreserveComponent;
  detailreserve(id: string) {
    this.id = id;
    this.restService.getreservedetail(id).subscribe((resp: any) => {
      this.item = resp;
      console.log(resp);
    });
    this.DetailModal.open();
  }
}
