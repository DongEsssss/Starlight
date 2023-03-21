import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TOGGLE_SERVICE } from '@clr/angular';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post } from 'src/app/models/asset_post';
import { HTTP_CODE_SUCCESS, MODAL_RES_CLOSE } from 'src/app/utils/shared.utils';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css'],
})
export class CreateAssetComponent
  extends DefaultFormComponent<asset_post>
  implements OnInit
{
  isSubmitted: boolean = false;
  override ngOnInit(): void {
    this.jsonForm = [
      { name: 'id', text: 'ID', type: 'string' },
      { name: 'path', text: 'PATH', type: 'string' },
      { name: 'filname', text: 'FILENAME', type: 'string' },
    ];
    this.getForm = [
      { name: 'id', text: 'ID', type: 'string' },
      { name: 'endpoint', text: 'ENDPOINT', type: 'string' },
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
      assetid: true,
      path: true,
      filename: true,
      endpoint: true,
    };
  }
  public get isValid(): boolean {
    if (this.modalForm == undefined) return false;
    var v = true;
    for (var field of this.isEditable ? this.jsonForm : this.getForm) {
      if (
        field.require &&
        this.modalForm.controls[field.name!]?.value == undefined
      ) {
        v = false;
      }
    }
    return v;
  }

  addAsset(): void {
  }

}
