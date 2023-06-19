import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { cafe } from 'src/app/models/cafe';
import { FormField } from 'src/app/models/common';

@Component({
  selector: 'app-sns',
  templateUrl: './sns.component.html',
  styleUrls: ['./sns.component.css'],
})
export class SnsComponent extends DefaultFormComponent<cafe> {
  newForm: Array<FormField> = [];
  textForm: Array<FormField> = [];
  selectForm: Array<FormField> = [];
  imgForm: Array<FormField> = [];

  cafeList: cafe[] = [];

  override ngOnInit(): void {
    super.ngOnInit();

    this.newForm = [
      {
        name: 'snstitle',
        text: '글제목',
        type: 'string',
        placeholder: '제목을 입력하시오',
        require: true,
      },
      {
        name: 'snswriter',
        text: '작성자',
        type: 'string',
        placeholder: '작성자 이름을',
        require: true,
      },
      {
        name: 'snscreatedate',
        text: '작성날짜',
        type: 'date',
        placeholder: '날짜를 선택하시오',
        require: true,
      },
    ];
    this.textForm = [
      {
        name: 'snscontent',
        text: '요청사항',
        type: 'textarea',
        placeholder:
          '글을 적어주십시오 타인에 대한 험담이나 욕설 시 제제를 받을 수 있으니 주의해주시길 바랍니다.',
      },
    ];
    this.imgForm = [
      {
        name: 'File',
        text: '첨부파일',
        type: 'file',
      },
    ];
    this.validationStateMap = {
      snstitle: true,
      snswriter: true,
      snscontent: true,
      snscreatedate: true,
      File: true,
    };
    this.formData = new cafe();
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new cafe();
  }

  override resetFormState() {
    this.validationStateMap = {
      snstitle: true,
      snswriter: true,
      snscontent: true,
      snscreatedate: true,
      File: true,
    };
  }

  create() {
    let tempData = this.modalForm.value;
    if (!tempData === null) {
      tempData = null;
    }
    let assetFormData = {
      snstitle: tempData.snstitle,
      snswriter: tempData.snswriter,
      snscontent: tempData.snscontent,
      snscreatedate: tempData.snscreatedate,
      File: tempData.File,
    };
    this.restService.createsns(assetFormData).subscribe(
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

  selectedFile: File | null = null;

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      this.http.post('your_upload_url', formData).subscribe((response) => {
        // 이미지 업로드가 성공하면, response에 업로드된 이미지의 경로나 정보가 포함될 수 있습니다.
        // 이 정보를 데이터베이스에 저장할 수 있습니다.
      });
    }
  }
}
