import {Component, ViewChild} from '@angular/core';
import {ClrDatagrid} from '@clr/angular';
import {transhistory} from 'src/app/models/transferhistory';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent {

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

  onRefresh(): void {
    // console.log(this.gridApi.setdatasou');
    // this.gridApi.refreshServerSide();
  }

  refresh() {
    location.reload();
  }
}
