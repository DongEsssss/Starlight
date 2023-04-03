import {Component, OnInit, ViewChild} from '@angular/core';
import {ClrDatagrid} from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import {transhistory} from 'src/app/models/transferhistory';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent extends DefaultComponent implements OnInit {

  @ViewChild('cDataGrid', {static: true}) cDataGrid !: ClrDatagrid;
  cDataLoading: boolean = false;
  page: number = 1;
  totalCount: number = 0;
  cSelection?: any;
  pagenationSize = 99;
  currentFilteredType: number = 0; // all projects
  projectName: string = '';
  historyList: transhistory[] = [];
  searchText !: string;

  columnDefs = [
    {headerName: 'ID', field: 'noNm'},
    {headerName: 'AssetID', field: 'assetid'},
    {headerName: 'PolicyID', field: 'policyid'},
    {headerName: 'ConnectorID', field: 'connectorid'},
    {headerName: 'State', field: 'state'},
    {headerName: 'Last Updated', field: 'lastupdate'},
    {headerName: 'CreateDate', field: 'createdate'},
  ];

  getField(history: transhistory, key: string) {
    return history[key as keyof transhistory];
  }

  refresh() {
    location.reload();
  }

  async gettransfer() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    this.historyList.length = 0;
    await this.restService.gettransfer().subscribe((resp: any) => {
      this.totalCount = parseInt(resp.totalCount!)
      this.historyList = resp;
      this.cDataGrid.dataChanged();
      this.cDataLoading = false;
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }
}
