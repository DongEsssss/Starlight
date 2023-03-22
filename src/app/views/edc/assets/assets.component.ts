import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { asset_post } from 'src/app/models/asset_post';
import { ClrDatagrid } from '@clr/angular';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';
import { DatagridColumnChanges } from '@clr/angular/data/datagrid/enums/column-changes.enum';


const asset_id = 'asset:prop:id';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid') cDataGrid!: ClrDatagrid;

  cDataLoading: boolean = false;
  asset_post: any[] = [];
  cSelection : any;
  selectedRows: any[] = [];
  dataloading = false;
  searchText!: any;

  searchasset(){

  }
  /** datagrid */

  columnDefs = [
    { headerName: 'Create Date', field: 'createdAt'},
    { headerName: 'ID', field: "id"},
    { headerName: 'Properties ID'},
    { headerName: 'Delete'},
  ];

  getField(asset: asset_post, key: any) {
    return asset[key as keyof asset_post];
  }

  async getRequestAsset() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    this.restService.getRequestAsset().subscribe(
      (resp: any) => {
        this.asset_post = resp;
        this.cDataGrid.dataChanged();
        this.cDataLoading = false;
      },
      (err) => {
        console.log(err);
        this.cDataLoading = false;
      }
    );
  }

  // create asset data
  @ViewChild('createasset', { static: false })
  CreateAsset!: CreateAssetComponent;
  addAsset(): void {
    this.CreateAsset.open();
  }

  // delete asset data
  deleteAsset(id: any):void{
    this.restService.deleteAssets(id).subscribe()
    console.log(id)
  }

  getSelection() :asset_post | undefined{
    return this.cSelection;
  }
}

