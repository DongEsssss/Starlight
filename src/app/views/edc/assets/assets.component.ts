import {Component, ViewChild} from '@angular/core';
import {assets} from 'src/app/models/assets';
import {CreateAssetComponent} from '../../modal/create-asset/create-asset.component';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent {
  assets = assets
  searchText !: string;

  @ViewChild('createasset', {static: false}) CreateAsset !: CreateAssetComponent

  createbtn() {
    this.CreateAsset.open();
  }
}
