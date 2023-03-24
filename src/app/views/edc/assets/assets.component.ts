import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { dataasset, asset_post } from 'src/app/models/asset_post';
import { ClrDatagrid } from '@clr/angular';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';
import { AssetDetailComponent } from '../../modal/asset-detail/asset-detail.component';
import { id } from '@cds/core/internal';


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
  dataasset: any[]=[];
  cSelection: any;
  selectedRows: any[] = [];
  dataloading = false;
  searchText!: any;
  page?: number;

  /** datagrid */

  columnDefs = [
    { headerName: 'Create Date', field: 'createdAt' },
    { headerName: 'ID', field: "id" },
    { headerName: 'Properties ID', field: 'properties.asset' },
  ];

  detail_columnDef = [
    { headerNames: 'ID', field: 'id' },
    { headerNames: 'Type', field: "type" },
    { headerNames: 'Path', field: 'path' },
    { headerNames: 'Filename', field: 'filename' }
  ];

  defaultColDef = {
    editable: false,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    sortable: false,
    resizable: true,
    filter: false,
    flex: 1,
    minWidth: 100,
  };

  getField(asset: asset_post, key: any) {
    return asset[key as keyof asset_post];
  }
  getdetailField(assets: dataasset, key: any) {
    return assets[key as keyof dataasset];
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }

  override ngOnCommonInit(): void {
    super.ngOnCommonInit();
    this.asset_post = this.commonService.getRequestAsset();
    this.onRefresh();
    this.dataasset = this.commonService.getassetaddress();
    this.onRefresh();
  }

  override onRefresh(): void {
    this.page = 1;
    this.getRequestAsset();
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
  //fetchdata
  loading = true;
  selected = [];
  current = 1;

  fetchData(clearSelection = true) {
    this.loading = true;
    this.asset_post = [this.getRequestAsset()];
  }

  // create asset data
  @ViewChild('createasset', { static: false })
  CreateAsset!: CreateAssetComponent;
  addAsset(): void {
    this.CreateAsset.open();
  }

  // delete asset data
  deleteAsset(id: any): void {
    this.restService.deleteAssets(id).subscribe()
    console.log(id)
    this.asset_post.splice(id, 1)
  }

  // getSelection(): asset_post | undefined {
  //   return this.cSelection;
  // }

  async getassetaddress(id :string) {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    this.restService.getassetaddress(id).subscribe(
      (resp: any) => {
        this.dataasset = resp;
        this.cDataGrid.dataChanged();
        this.cDataLoading = false;
      },
      (err) => {
        console.log(err);
        this.cDataLoading = false;
      }
    );
  }
}
