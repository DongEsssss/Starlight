import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrDatagrid } from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { catalog } from 'src/app/models/catalog';

@Component({
  selector: 'app-catalog-browser',
  templateUrl: './catalog-browser.component.html',
  styleUrls: ['./catalog-browser.component.css']
})
export class CatalogBrowserComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid', { static: true }) cDataGrid !: ClrDatagrid;
  cDataLoading: boolean = false;
  cSelection?: any;
  searchText: any;
  catalogList: catalog[] = []

  columnDefs = [
    { headerName: 'ID' },
    { headerName: 'Asset ID' },
    { headerName: 'Consumer' }
  ];

  async getRequestCatalog() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    const providerUrl = { providerUrl: "http://192.168.0.5:8282/api/v1/ids/data" }
    await this.restService.getRequestCatalog(providerUrl).subscribe((resp) => {
      this.catalogList = Array(resp)
      console.log(this.catalogList);
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }
}
