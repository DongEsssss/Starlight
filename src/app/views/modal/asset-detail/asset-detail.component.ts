import { Component, OnInit } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post } from 'src/app/models/asset_post';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
})
export class AssetDetailComponent extends DefaultFormComponent<asset_post> implements OnInit {
  cDataGrid: any;
  id?: any;

  asset_post: asset_post[] = [];
  cDataLoading!: boolean;
  cSelection: any;
  searchText!: string;
  cls = true

  // delete asset data
  deleteAsset(id: any): void {
    this.restService.deleteAssets(id).subscribe()
    console.log(id)
    this.asset_post.splice(id, 1)
  }

  override close() {
    this.opened = false;
  }
  //datagrid
  getassetaddress(id: any): void {
    this.restService.getassetaddress(id).subscribe((resp: any) => {
      this.asset_post = resp;
      console.log(this.asset_post);
    });
  }

  columnDefs = [
    { headerName: 'Create Date', field: 'createdAt' },
    { headerName: 'ID', field: "id" },
    { headerName: 'Properties ID', field: 'properties.asset' },
  ];

}
