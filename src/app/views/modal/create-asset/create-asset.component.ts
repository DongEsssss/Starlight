import {Component, OnInit} from '@angular/core';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';
import {asset_post} from 'src/app/models/asset_post';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent extends DefaultModalComponent<asset_post> implements OnInit{

  Assetname !: string;
  Version !: string;
  type !: string;
  path !: string;
  filename !: string;
  datatype !: string;
  jsontype !: string;

}
