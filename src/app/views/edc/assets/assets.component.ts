import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyword } from 'src/app/models/common';
import { DefaultComponent } from 'src/app/components/default.component';
import { asset_post } from 'src/app/models/asset_post';
import { ClrDatagrid } from '@clr/angular';
import { HTTP_CODE_SUCCESS, MODAL_RES_CANCEL, MODAL_RES_CLOSE, PAGE_SIZE } from 'src/app/utils/shared.utils';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';
import { CancelComponent } from '../../modal/cancel/cancel.component';

const asset_id = 'asset:prop:id';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid') cDataGrid!: ClrDatagrid;

  cDataLoading: boolean = false;
  asset !:any;
  asset_post: asset_post[] = [];
  cSelection?:any;
  pageSize = 10;
  lastPage : any;
  selectedRows: any[]=[];
  dataloading = false;
  searchText !: any;
  typeList: Array<Keyword> = [
    {
      id: '01',
      name: 'All',
    },
    {
      id: '02',
      name: 'Json',
    },
    {
      id: '03',
      name: 'Get',
    },
  ];
  select: string = this.typeList[0].id!;
  keyword: string = '';

  /** datagrid */

  columnDefs = [
    { headerName: 'Create Date', field: 'createdAt' },
    { headerName: 'ID', field: 'id' },
    { headerName: 'Properties ID', field: 'properties', filterParams : '[0]'}
  ];

  getField(asset:asset_post, key:any){
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
  @ViewChild('createasset', { static: false }) CreateAsset!: CreateAssetComponent ;
  addAsset(): void{
    this.CreateAsset.open();
  }

  createBus() {
    this.CreateAsset.callback = this;
    this.CreateAsset.open();
  }

  // delete asset data
  override ngOnInit(): void {
    this.restService.getRequestAsset()
    .subscribe(response => {
      this.asset_post = response;
    });
  }
  @ViewChild('deletemodal', { static: false }) deletemodal !: CancelComponent

  deleteAsset(){
  }
}

