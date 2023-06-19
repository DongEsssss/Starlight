import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { DefaultComponent } from 'src/app/components/default.component';
import { DefaultFormComponent } from 'src/app/components/default.form.component';
import { area, camp, themes } from 'src/app/models/Camp';
import { FormField } from 'src/app/models/common';
import { CampdetailreserveComponent } from '../../campdetailreserve/campdetailreserve.component';
import { reserve } from 'src/app/models/Reserve';
import { ReserveComponent } from '../reserve/reserve.component';

@Component({
  selector: 'app-searchcamp',
  templateUrl: './searchcamp.component.html',
  styleUrls: ['./searchcamp.component.css'],
})
export class SearchcampComponent extends DefaultFormComponent<camp> {
  area = area;
  theme = themes;
  campList: camp[] = [];

  searchText?: string;
  cDataLoading: boolean = false;
  cSelection?: any;
  keyword?: string;
  lgOpen: boolean = false;
  untouched: boolean = true;
  progress: number = 0;

  @Input() override id: any;

  model = {
    id: '',
    type: '',
  };
  doCancel(): void {
    this.wizard.close();
    this.resetWizard();
  }

  resetWizard(): void {
    this.wizard.reset();
    this.model.id = '';
    this.model.type = '';
    this.progress = 0;
  }

  columnDefs = [
    { headerName: '', type: 'text' },
    { headerName: '캠핑장', type: 'text' },
    { headerName: '캠핑장 위치 정보', type: 'text' },
    { headerName: '테마', type: 'text' },
    { headerName: '가격', type: 'text' },
    { headerName: '상세 및 예약', type: 'text', Width: 150 },
  ];

  async getcamp() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getcamp().subscribe((resp: any) => {
      this.campList = resp;
      this.cDataLoading = false;
    });
  }
  @ViewChild('reservemodal', { static: false }) addmodal!: ReserveComponent;
  reserve(id: any) {
    this.restService.getcampdetail(id).subscribe((resp: any) => {
      this.item = resp;
      console.log(resp);
    });
    this.addmodal.open();
  }
  //wizard
  @ViewChild('wizard') wizard: ClrWizard;
  _open: boolean = false;

  opens(id: any) {
    this.restService.getcampdetail(id).subscribe((resp: any) => {
      this.item = resp;
      this._open = true;
      console.log(resp);
    });
  }

  ngOnChanges(): void {
    if (this.item) {
      this.campList[0] = this.item;
    }
  }

  imageObject = [
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_384_06494dkfgLlvSJtG7pS2Npp6.jpg',
      title: '동군 캠핑장1',
    },
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_384_0472m4OckPF9xuQGdTWgcZ0x.jpg',
      title: '동군 캠핑장2',
    },
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_384_56184Uqtzc8X6Bk9zbB5Q9JN.jpg',
      title: '동군 캠핑장3',
    },
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_1000_13441bbMu7ytfezDghVLxZZX.jpg',
      title: '동군 캠핑장4',
    },
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_1000_91000dLJel9FtaUDAzlVTRD3.jpg',
      title: '동군 캠핑장5',
    },
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_1000_0120f3ywi8Y6Yaac5JSPuV1w.jpg',
      title: '동군 캠핑장6',
    },
    {
      thumbImage:
        'https://gocamping.or.kr/upload/camp/2965/thumb/thumb_1000_5471udntaJfGjNcpwbyraeWh.jpg',
      title: '동군 캠핑장7',
    },
  ];

  name = 'Angular';
  @ViewChild('scrollMe') scrollMe: ElementRef;
  scrollTop = 200;
  chatMessage = '';
  chat = [];
  messages = [];

  addMessage() {
    var height = this.scrollMe.nativeElement.offsetHeight;
    var scrollTop = this.scrollMe.nativeElement.scrollTop;
    var scrollHeight = this.scrollMe.nativeElement.scrollHeight;
    var scroll = scrollHeight - scrollTop == height;
    this.messages.push(this.chatMessage);
    if (scroll) this.scrollTop = this.scrollMe.nativeElement.scrollHeight;
  }
}
