import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyword } from 'src/app/models/common';
import { DefaultComponent } from 'src/app/components/default.component';
import { asset } from 'src/app/models/asset_post';
import { ClrDatagrid } from '@clr/angular';
import { HTTP_CODE_SUCCESS } from 'src/app/utils/shared.utils';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';

const asset_id = 'asset:prop:id';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css'],
})
export class AssetsComponent extends DefaultComponent implements OnInit {
  @ViewChild('cDataGrid') cDataGrid !: ClrDatagrid;
  @ViewChild('createasset', { static: false })
  CreateAsset!: CreateAssetComponent;
  createbtn() {
    // this.CreateAsset.open();
  }

  cDataLoading: boolean = false;
  assetList = asset;
  totalCount: number = 0;
  pagenationSize = 100;
  page: number = 1;
  searchText!: any;

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
    { headerName: 'createdAt', field: 'createdAt' },
    { headerName: 'id', field: 'id' },
    { headerName: 'asset:prop:id', field:'asset_id'}
  ];
}
