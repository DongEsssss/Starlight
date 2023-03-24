import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { AssetAdvancedFormModel, asset_post } from 'src/app/models/asset_post';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css'],
})

export class CreateAssetComponent extends DefaultFormComponent<asset_post> implements OnInit
{
  all: any;
  override ngOnInit(): void {
    this.newForm = [
      { name: 'id', text: 'ID', type: 'string' },
      { name: 'path', text: 'PATH', type: 'string' },
      { name: 'filename', text: 'FILENAME', type: 'string' },
    ];
    this.formData = new asset_post();
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new asset_post();
  }

  override resetFormState() {
    this.validationStateMap = {
      id: true,
      path: true,
      filename: true,
    };
  }
  override open(notice?: asset_post): void {
    super.open();
    this, this.resetFormState();
    if (notice === undefined) {
      this.isEditable = false;
      this.formData = new asset_post();
    }
  }
  //create asset
  get value(): AssetAdvancedFormModel {
    return this.all.value;
  }

}
