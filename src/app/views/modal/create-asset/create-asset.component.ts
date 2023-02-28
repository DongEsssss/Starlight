import { Component } from '@angular/core';
import { DefaultModalComponent } from 'src/app/components/default.modal.component';
import { Asset } from 'src/app/models/assets';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent extends DefaultModalComponent<Asset>{
  Assetname !: string;
  Version !: string;
  type !: string;
  path !: string;
  filename !: string;
}
