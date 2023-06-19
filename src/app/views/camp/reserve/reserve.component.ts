import { Component, Input } from '@angular/core';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { camp } from 'src/app/models/Camp';
import { reserve } from 'src/app/models/Reserve';
import { FormField } from 'src/app/models/common';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent extends DefaultFormComponent<reserve> {
  @Input() override id: any;
  @Input() override item: any;

  campList: camp[] = [];
  ngOnChanges(): void {
    if (this.item) {
      this.campList[0] = this.item;
    }
  }
  reserve: reserve[] = [];

  newForm: Array<FormField> = [];
  dateForm1: Array<FormField> = [];
  dateForm2: Array<FormField> = [];
  checkForm1: Array<FormField> = [];
  checkForm2: Array<FormField> = [];
  checkForm3: Array<FormField> = [];
  textForm: Array<FormField> = [];
  override ngOnInit(): void {
    super.ngOnInit();
    this.newForm = [
      {
        name: 'reservename',
        text: '예약자',
        type: 'string',
        placeholder: '제목을 입력하시오',
        require: true,
      },
      {
        name: 'campname',
        text: '캠핑장 이름',
        type: 'string',
        placeholder: '캠핑장 이름을 입력하시오.',
        require: true,
      },
      {
        name: 'people',
        text: '인원',
        type: 'number',
        placeholder: '캠핑하는 인원의 명수를 입력하시오.',
        require: true,
      },
    ];
    this.dateForm1 = [
      { name: 'start', text: '시작일', type: 'date', require: true },
    ];
    this.dateForm2 = [
      { name: 'end', text: '종료일', type: 'date', require: true },
    ];
    this.checkForm1 = [
      { name: 'tree', text: '장작 구매 (무한대로!)', type: 'checkbox' },
      { name: 'trash', text: '쓰레기 봉투 구매', type: 'checkbox' },
      { name: 'appliance', text: '식기구 대여', type: 'checkbox' },
    ];
    this.checkForm2 = [
      { name: 'concent', text: '전기 콘센트 대여', type: 'checkbox' },
      { name: 'tool', text: '캠핑 도구 대여', type: 'checkbox' },
      { name: 'lamp', text: '미니 조명 대여', type: 'checkbox' },
    ];
    this.checkForm3 = [
      { name: 'vim', text: '프로젝트 빔 대여', type: 'checkbox' },
      { name: 'play', text: '놀이기구 대여', type: 'checkbox' },
      { name: 'tent', text: '텐트 대여', type: 'checkbox' },
    ];
    this.textForm = [
      {
        name: 'request',
        text: '요청사항',
        type: 'textarea',
        placeholder:
          '사장님께 요청사항을 보내는 공간입니다 욕설이나 험담을 했을 경우는 법적으로 불이익을 얻을 수 있으니 이점 유의하시길 바랍니다.',
      },
    ];
    this.validationStateMap = {
      id: true,
      reservename: true,
      end: true,
      start: true,
      tree: true,
      trash: true,
      appliance: true,
      concent: true,
      tool: true,
      lamp: true,
      vim: true,
      play: true,
      tent: true,
      request: true,
      people: true,
      campname: true,
    };
    this.formData = new reserve();
  }

  override resetFormModel(): void {
    super.resetFormModel();
    this.inlineAlert.close();
    this.formValueChanged = false;
    this.formData = new reserve();
  }

  override resetFormState() {
    this.validationStateMap = {
      id: true,
      reservename: true,
      end: true,
      start: true,
      tree: true,
      trash: true,
      appliance: true,
      concent: true,
      tool: true,
      lamp: true,
      vim: true,
      play: true,
      tent: true,
      request: true,
      people: true,
      campname: true,
    };
  }

  create() {
    let tempData = this.modalForm.value;
    console.log(tempData);
    if (!tempData == null) {
      tempData.value == 'X';
    } else {
      tempData == 'ㅇ';
    }
    let assetFormData = {
      reservename: tempData.reservename,
      end: tempData.end,
      start: tempData.start,
      tree: tempData.tree,
      trash: tempData.trash,
      appliance: tempData.appliance,
      concent: tempData.concent,
      tool: tempData.tool,
      lamp: tempData.lamp,
      vim: tempData.vim,
      play: tempData.play,
      tent: tempData.tent,
      request: tempData.request,
      people: tempData.people,
      campname: tempData.campname,
    };
    this.restService.createreserve(assetFormData).subscribe(
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
  updateJSONData() {
    this.http.get('reserve.json').subscribe((json_data: any) => {
      // value 값이 '' 일 때 '0'으로 변경
      const updatedData = Object.entries(json_data).reduce(
        (acc, [key, value]) => {
          acc[key] = value === '' ? '0' : value;
          return acc;
        },
        {}
      );

      this.http.post('reserve.json', updatedData).subscribe(() => {
        console.log('JSON 데이터가 업데이트되었습니다.');
      });
    });
  }
}
