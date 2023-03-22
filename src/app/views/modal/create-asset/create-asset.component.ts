import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post } from 'src/app/models/asset_post';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css'],
})
export class CreateAssetComponent extends DefaultFormComponent<asset_post> implements OnInit
{
    override ngOnInit(): void {
    this.newForm = [
      { name: 'id', text: 'ID', type: 'string' },
      { name: 'path', text: 'PATH', type: 'string' },
      { name: 'filename', text: 'FILENAME', type: 'string' },
    ];
    this.formData = new asset_post();
  }
//create asset
  createasset() : void{
  }
}
