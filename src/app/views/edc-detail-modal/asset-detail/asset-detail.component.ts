import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post } from 'src/app/models/asset_post';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
})
export class AssetDetailComponent extends DefaultFormComponent<asset_post> implements OnInit {
  assetList : asset_post[] =[];
  totalCount : number = 0;
  columnDefs = [
    { headerName: 'Content Type' , field: 'type'},
    { headerName: 'Filename' , field: 'filename'},
    { headerName: 'Path' , field: 'path'},
  ];
  cDataLoading: any;

  getField(asset:asset_post, key:string){
    return asset[key as keyof asset_post];
  }

  async getassetaddress(){
    let id;
    console.log(id)
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    this.assetList.length = 0;
    await this.restService.getassetaddress(id).subscribe((resp: any) => {
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

  deleteAsset(id : any){
    this.restService.deleteAssets(id).subscribe({
      next: () => {
        this.getassetaddress();
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Asset ID : ${id} Delete Complete`)
    });
  }
}
