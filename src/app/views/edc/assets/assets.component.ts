import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyword } from 'src/app/models/common';
import { DefaultComponent } from 'src/app/components/default.component';
import { Asset } from 'src/app/models/assets';
import { ClrDatagrid } from '@clr/angular';
import { ResultBody } from 'src/app/models/resultbody';
import { HTTP_CODE_SUCCESS } from 'src/app/utils/shared.utils';
import { CreateAssetComponent } from '../../modal/create-asset/create-asset.component';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent extends DefaultComponent implements OnInit{
  @ViewChild('createasset', {static: false}) CreateAsset !: CreateAssetComponent
  createbtn() {
    this.CreateAsset.open();
  }
  @ViewChild('cDataGrid') cDataGrid !: ClrDatagrid;
  cDataLoading:boolean = false;
  selectionComNo: number = -1;
  cSelection ?: any;
  data$assetList : Asset[]=[];
  assetpage : Asset[] =[];
  totalCount: number = 0;
  pagenationSize = 99;
  page:number = 1;
  searchText !: any;

  typeList: Array<Keyword> = [{
    id: "01",
    name: "All"
  }, {
    id: "02",
    name: "Json"
  }, {
    id: "03",
    name: "Get"
  }]
  select: string = this.typeList[0].id!;
  keyword: string = "";

  /** datagrid */
  columnDefs = [
    {headerName: 'createdAt', field : 'createdAt'},
    {headerName: 'ID', field: 'id'},
    {headerName: 'Content_Type', field: 'properties'},
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
  getField(Asset: Asset, key: any) {
    return Asset[key as keyof Asset];
  }
  onRefresh(): void {
    this.page = 1;
    this.requestAssets();
  }

  async requestAssets() {
    if(this.cDataLoading)return;
    this.cDataLoading = true;
    this.assetList.length = 0;
    this.restService.requestAssets().subscribe((res: ResultBody<Asset>) => {
        if (res.code == HTTP_CODE_SUCCESS && res.items != undefined) {
          for (const assetList of res.items) {
            this.assetList.push(assetList);
          }
          this.totalCount = parseInt(res.totalCount!);
        }
        this.cDataGrid.dataChanged();
        this.cDataLoading = false;
      }, err => {
        console.log(err);
        this.cDataLoading = false;
      });
  }
  getPageSize(){
    this.assetpage.length = 0;
    if(this.assetList.length > 0){
      this.assetpage = this.assetList.slice((this.page-1)*this.pagenationSize, ((this.page-1)*this.pagenationSize)+this.pagenationSize);
    }  }

}
