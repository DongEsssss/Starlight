import { Component, ViewChild, ElementRef } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { InlineAlertComponent } from 'src/app/components/inline-alert/inline-alert.component';
import { FormField } from 'src/app/models/common';
import { inquiry } from 'src/app/models/inquriy';
import { RestService } from 'src/app/services/rest/rest.service';
import {
  HTTP_CODE_SUCCESS,
  MODAL_RES_CLOSE,
  toFormData,
} from 'src/app/utils/shared.utils';

@Component({
  selector: 'app-no-enrollment',
  templateUrl: './no-enrollment.component.html',
  styleUrls: ['./no-enrollment.component.css'],
})
export class NoEnrollmentComponent extends DefaultFormComponent<inquiry> {
  title?: any;
  writer: any;
  newForm: Array<FormField> = [];
  textForm: Array<FormField> = [];

  override ngOnInit(): void {
    super.ngOnInit();
    this.newForm = [
      {
        name: 'intitle',
        text: '문의 제목',
        type: 'string',
        placeholder: '제목을 입력하시오',
        require: true,
      },
      {
        name: 'snsemail',
        text: '작성자 이메일',
        type: 'string',
        placeholder: '답변을 받을 이메일을 입력하시오',
        require: true,
      },
      {
        name: 'inwriter',
        text: '작성자 이름',
        type: 'string',
        placeholder: '이름을 입력하시오',
        require: true,
      },
      {
        name: 'increatedate',
        text: '작성날짜',
        type: 'date',
        placeholder: '날짜를 선택하시오',
        require: true,
      },
    ];
    this.textForm = [
      {
        name: 'incontent',
        text: '내용',
        type: 'textarea',
        placeholder: '내용 입력하시오',
        require: true,
      },
    ];
    this.validationStateMap = {
      id: true,
      intitle: true,
      snsemail: true,
      incontent: true,
      inwriter: true,
      increatedate: true,
    };

    this.formData = new inquiry();
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new inquiry();
  }

  override resetFormState() {
    this.validationStateMap = {
      id: true,
      intitle: true,
      snsemail: true,
      incontent: true,
      inwriter: true,
      increatedate: true,
    };
  }
  create() {
    let tempData = this.modalForm.value;
    if (!tempData == null) {
      tempData = null;
    }
    let assetFormData = {
      intitle: tempData.intitle,
      snsemail: tempData.snsemail,
      incontent: tempData.incontent,
      inwriter: tempData.inwriter,
      increatedate: tempData.increatedate,
    };
    this.restService.createinquriy(assetFormData).subscribe(
      (res: any) => {
        this.onGoing = false;
        this.close();
        this.onrefresh();
      },
      (err) => {
        this.onGoing = false;
        this.inlineAlert.showInlineError('BAD REQUEST');
        console.log(err);
      }
    );
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
