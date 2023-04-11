import {Component, OnInit, ViewChild} from '@angular/core';
import {ClrDatagrid} from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { Transferhistory } from 'src/app/models/transferhistory';
@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent extends DefaultComponent implements OnInit {
  cDataLoading: boolean = false;
  cSelection?: any;
  currentFilteredType: number = 0; // all projects
  projectName: string = '';
  historyList: Transferhistory[] = [];
  searchText !: string;

  columnDefs = [
    {headerName: 'ID'},
    {headerName: 'type'},
    {headerName: 'Asset ID'},
    {headerName: 'ConnectorID'},
    {headerName: 'ContractID'},
    {headerName: 'State'},
    {headerName : 'StateTimestamp'},
    {headerName: 'Last Updated'},
    {headerName: 'CreateDate'},
  ];

  getField(history: Transferhistory, key: string) {
    return history[key as keyof Transferhistory];
  }

  refresh() {
    location.reload();
  }

  @ViewChild('cDataGrid', {static: true}) cDataGrid !: ClrDatagrid;
  async gettransfer() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.gettransfer().subscribe((resp: any) => {
      this.historyList = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
      console.log(resp)
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }
}
