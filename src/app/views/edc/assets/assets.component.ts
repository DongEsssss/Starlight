import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { asset_post } from 'src/app/models/asset_post';
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
  assetList: asset_post[] = [];
  cSelection: any;
  keyword?: string;
  searchText: string = '';
  /** datagrid */
  columnDefs = [
    { headerName: 'No' },
    { headerName: 'ID' },
    { headerName: 'Create Date' }
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

  async getRequestAsset() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getRequestAsset().subscribe((resp: any) => {
      this.assetList = resp;
      this.totalCount = parseInt(resp.totalCount!)
      this.cDataLoading = false;
      console.log(resp)
      for (let i = 0; i < this.assetList.length; i++) {
        this.restService.getassetaddress(this.assetList[i].id).subscribe((resp: any) => {
          this.assetList[i].dataaddress = resp
        });
      }
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
  deleteAsset(id: any): void {
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
  detailasset(id: string) {
    this.id = id;
    this.restService.getassetaddress(id).subscribe((resp: any) => {
      this.item = resp
    })
    this.DetailModal.open()
  }

  //delete
  delete(id: any): void {
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


