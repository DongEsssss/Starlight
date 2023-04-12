import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { asset_post, asset_type } from 'src/app/models/asset_post';
import { ClrDatagrid } from '@clr/angular';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';
import { AssetDetailComponent } from '../../edc-detail-modal/asset-detail/asset-detail.component';
import { MODAL_RES_COMMON_SELECT, objectCopy } from 'src/app/utils/shared.utils';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent extends DefaultComponent implements OnInit {

  @ViewChild('cDataGrid') cDataGrid!: ClrDatagrid;
  cDataLoading: boolean = false;
  assetList : asset_post[] = [];
  assettype : asset_type[] = [];
  cSelection: any;
  keyword?: string;
  searchText : string = '';
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

  @Input() set setMultiSelect(enable:boolean){
    this.isMultipleSelect = enable;
  }
  isMultipleSelect:boolean = true;

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


  addAsset(): void {
    this.CreateAsset.open();
  }


  /** Card */
  deleteAsset(id: any):void{
    this.restService.deleteAssets(id).subscribe({
      next: () => {
        this.getRequestAsset();
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Asset ID : ${id} Delete Complete`)
    });
  }

  /** detail */
  onSelection(){
    if(this.callback != undefined){
      this.callback.onModalResponse(MODAL_RES_COMMON_SELECT, this.isMultipleSelect?this.cSelection:this.cSelection);
      this.close();
    }
  }
  detailasset(): void {
    this.DetailModal.open()
  }

  //getassetaddress
  async getassetaddress(id : any){
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getassetaddress(id).subscribe((resp: any) => {
      this.assetList = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
    },
      (err) => {
        this.cDataLoading = false;
        console.log(err);
      }
    );
  }

  //delete
  delete(id: any):void{
    this.restService.deleteAssets(id).subscribe({
      next: () => {
        this.getRequestAsset();
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Asset ID : ${id} Delete Complete`)
    });
  }
}


