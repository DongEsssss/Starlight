import { Component, OnInit } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post, contentList } from 'src/app/models/asset_post';
import { CommonCD, FormField } from 'src/app/models/common';
import { COMMON_CODE_TYPE } from 'src/app/services/common/common.service.service';
import { HTTP_CODE_SUCCESS, MODAL_RES_CLOSE } from 'src/app/utils/shared.utils';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css'],
})

export class CreateAssetComponent extends DefaultFormComponent<asset_post> implements OnInit {
  contentList!: Array<contentList>
  commonCdList !: Array<CommonCD>
  assetList: Array<asset_post> = []
  getForm: Array<FormField> = [];
  restForm: Array<FormField> = [];



  override ngOnInit(): void {
    super.ngOnInit();
    this.getForm = [
      { name: 'id', text: 'AssetID', type: 'string', placeholder: 'test-document', require:true},
      { name: 'path', text: 'Path', type: 'string', placeholder: '/home/vargrant/', require:true},
      { name: 'filename', text: 'FileName', type: 'string', placeholder: 'postman.json', require:true},
    ];
    this.restForm = [
      { name: 'id', text: 'AssetID', type: 'string', placeholder: 'test-document', require:true},
      { name: 'path', text: 'Path', type: 'string', placeholder: '/home/vargrant/', require:true}
    ];
    this.validationStateMap = {
      "id": true,
      "filename": true,
      "type": true,
      "path": true,
    };

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
      "id": true,
      "filename": true,
      "type": true,
      "path": true,
    };
  }

  selectContentType(newvalue: string) {
    if (newvalue == undefined) return;
    this.formData.contentNM = this.contentList[0].contentNM
  }

  override ngOnCommonInit(): void {
    this.commonCdList = this.commonService.getCommonList();
    this.contentList = this.commonCdList.filter(commonCode => commonCode.baseCd == COMMON_CODE_TYPE);
  }

  override open(asset?: asset_post): void {
    super.open();
    this.resetFormState();
  }

  override close() {
    super.close();
  }
  create() {
    let tempData = this.modalForm.value;
    if (!tempData == null) {
      tempData = null
    }
    let assetFormData = {
      "asset": {
        "properties": {
          "asset:prop:id": tempData.id
        }
      },
      "dataAddress": {
        "properties": {
          "type": tempData.contenttype,
          "path": tempData.path,
          "filename": tempData.filename
        }
      }
    }
    this.restService.createAsset(assetFormData).subscribe((res: any) => {
      this.onGoing = false;
      this.close()
      this.onrefresh()
    }, err => {
      this.onGoing = false;
      this.inlineAlert.showInlineError('BAD REQUEST');
      console.log(err);
    });
    this.modalForm.reset();
    if (!this.isValid) {
      return;
    }
    // We have new user data
    if (!assetFormData) {
      return;
    }
  }
  
}


