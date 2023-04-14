import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post } from 'src/app/models/asset_post';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
})
export class AssetDetailComponent extends DefaultFormComponent<asset_post>{
  assetList: asset_post[] = [];
  totalCount: number = 0;
  columnDefs = [
    { headerName: 'Content Type', field: 'type' },
    { headerName: 'Filename', field: 'filename' },
    { headerName: 'Path', field: 'path' },
  ];
  cDataLoading: any;

  getField(asset: asset_post, key: string) {
    return asset[key as keyof asset_post];
  }

  @Input() item: any;
  @Input() id: any;

  filename: any;
  type: any;
  path: any;

  ngOnChanges(): void {
    if (this.item) {
      this.assetList = [{
        createdAt: null,
        id: this.id,
        asset: {
          properties: {
            'asset:prop:id': null
          }
        },
        dataaddress: this.item,
        contentNo: null,
        contentNM: null
      }]

      this.filename = this.assetList[0].dataaddress.properties.filename
      this.type = this.assetList[0].dataaddress.properties.type
      this.path = this.assetList[0].dataaddress.properties.path
    }
  }

  deleteAsset(id: any) {
    this.restService.deleteAssets(id).subscribe({
      next: () => {
        this.item;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => console.info(`Asset ID : ${id} Delete Complete`)
    });
  }
}