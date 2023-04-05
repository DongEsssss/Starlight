import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post } from 'src/app/models/asset_post';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
})
export class AssetDetailComponent extends DefaultFormComponent<asset_post> implements OnInit {
  cSelection : any;
  @Input() viewMode = false;
  cDataLoading: boolean;
  assetList : asset_post[] = []
  totalCount : number  = 0;

  columnDefs=[
    {header : `type`, headerName : 'Content Type'},
    {header : `filename`, headerName : 'FileName'},
    {header : `path`, headerName : 'Path'},
  ]

  async getRequestAsset() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getRequestAsset().subscribe((resp: any) => {
      this.assetList = resp;
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
