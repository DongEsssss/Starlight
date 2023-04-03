import { Component,  OnInit} from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { asset_post, contentList } from 'src/app/models/asset_post';
import { CommonCD, FormField } from 'src/app/models/common';
import { COMMON_CODE_TYPE } from 'src/app/services/common/common.service.service';
import { HTTP_CODE_SUCCESS, MODAL_RES_CLOSE} from 'src/app/utils/shared.utils';

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
      { name: 'id', text: 'AssetID', require: true, type: 'string', placeholder: 'test-document' },
      { name: 'path', text: 'Path', require: true, type: 'string', placeholder: '/home/vargrant/' },
      { name: 'filename', text: 'FileName', require: true, type: 'string', placeholder: 'postman.json' },
    ];
    this.restForm = [
      { name: 'id', text: 'AssetID', require: true, type: 'string', placeholder: 'test-document' },
      { name: 'path', text: 'Path', require: true, type: 'string', placeholder: '/home/vargrant/' }
    ];
    this.validationStateMap = {
      "AssetTitle": true,
    };
    
    this.formData = new asset_post();
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData= new asset_post();
  }

  override resetFormState(){
    this.validationStateMap = {
      "AssetTitle": true,
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
    this.inlineAlert.close();
    let assetFormData = this.modalForm.value;
    this.restService.createAsset(assetFormData).subscribe((res: any) => {
      this.onGoing = false;
      if (res.code == HTTP_CODE_SUCCESS) {
        if(this.callback != undefined){
          this.callback.onModalResponse(MODAL_RES_CLOSE, this.callbackData);
        }
        this.close();
      } else {
        this.inlineAlert.showInlineError('BAD REQUEST');
      }
    }, err => {
      this.onGoing = false;
      this.inlineAlert.showInlineError('BAD REQUEST');
      console.log(err);
      console.log(assetFormData)
    });
  if (!this.isValid) {
    return;
  }
  // We have new user data
  if (!assetFormData) {
    return;
  }
}
}


