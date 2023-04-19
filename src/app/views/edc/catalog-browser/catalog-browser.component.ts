import {Component, ViewChild, OnInit} from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import {ClrDatagrid} from '@clr/angular';
import { catalog } from 'src/app/models/catalog';

@Component({
  selector: 'app-catalog-browser',
  templateUrl: './catalog-browser.component.html',
  styleUrls: ['./catalog-browser.component.css']
})
export class CatalogBrowserComponent extends DefaultComponent implements OnInit{
  @ViewChild('cDataGrid', { static: true }) cDataGrid !: ClrDatagrid;
  cDataLoading: boolean = false;
  cSelection ?: any;
  searchText: any;
  catalogList :  catalog[] = [];

  columnDefs = [
    { headerName: 'ID'},
    { headerName: 'Type'},
    { headerName: 'State'},
    { headerName: 'UpdatedAt'},
    { headerName: 'CreatedAt'}
  ];

  async getRequestCatalog() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getRequestCatalog().subscribe((resp: any) => {
      this.catalogList = resp;
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
