import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { asset_post } from 'src/app/models/asset_post';
import { ClrDatagrid } from '@clr/angular';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';
import { AssetDetailComponent } from '../../edc-detail-modal/asset-detail/asset-detail.component';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid') cDataGrid!: ClrDatagrid;
  cDataLoading: boolean = false;
  assetList: asset_post[] = [];
  cSelection: any;
  keyword?: string;
  searchText : string = '';

  /** search */
  /** datagrid */
  columnDefs = [
    { headerName: 'No' },
    { headerName: 'ID' },
    { headerName: 'Create Date'}
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

  //request Asset Data
  override ngOnCommonInit(): void {
    super.ngOnCommonInit();
    this.assetList = this.commonService.getRequestAsset();
    this.onRefresh();
  }

  override onRefresh(): void {
    this.page = 1;
    this.getRequestAsset();
  }

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

  // create asset data
  @ViewChild('createasset', { static: false }) CreateAsset!: CreateAssetComponent;
  @ViewChild('assetdetail', { static: false }) DetailModal!: AssetDetailComponent;

  getSelection(): asset_post | undefined {
    return this.cSelection
  }

  addAsset(): void {
    this.CreateAsset.open(undefined);
  }

  detailasset(): void {
    let selectrow = this.getSelection()
    console.log(selectrow)
    this.restService.getasset(selectrow).subscribe({
      next: (resp) => {
        this.assetList = resp;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info('complete')
    });
    this.DetailModal.callback = this;
    this.DetailModal.callbackData = selectrow
    this.DetailModal.open();
  }
  /** Card */
  deleteAsset(id: any):void{
    this.restService.deleteAssets(id).subscribe({
      next: () => {
        this.getRequestAsset();
        console.log(id)
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`${id} Delete Complete`)
    });
  }
}


