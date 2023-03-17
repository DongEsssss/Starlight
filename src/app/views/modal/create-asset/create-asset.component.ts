import {Component} from '@angular/core';
import {DefaultModalComponent} from 'src/app/components/default.modal.component';
import {asset} from 'src/app/models/asset_post';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css']
})
export class CreateAssetComponent{
  Assetname !: string;
  Version !: string;
  type !: string;
  path !: string;
  filename !: string;
  datatype !: string;
  jsontype !: string;

  templateForm: any;

  templateFormSubmit(arg0: any) {
    throw new Error('Method not implemented.');
  }

  onChangeofOptions(newGov: any) {
    console.log(newGov);
  }

}
