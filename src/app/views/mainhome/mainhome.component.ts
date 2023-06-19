import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagrid } from '@clr/angular';
import { event, events } from 'src/app/models/Eventboard';
import { noticeas } from 'src/app/models/Noticeboard';
import { EventsComponent } from '../detail/events/events.component';
import { Events2Component } from '../detail/events2/events2.component';
import { DefaultComponent } from 'src/app/components/default.component';
import { NoticeboardComponent } from '../detail/noticeboard/noticeboard.component';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css'],
})
export class MainhomeComponent extends DefaultComponent implements OnInit {
  name = '스캠에 온걸 환영해~!';

  imageObject = [
    {
      thumbImage:
        'http://kor.theasian.asia/wp-content/uploads/2021/04/%EB%8C%80%EC%83%81%EC%A3%BC-%EC%B2%AD%EC%A0%95%EC%9B%90-%ED%91%B8%EB%A5%B8%EB%B4%84%EC%97%90-%EC%A0%95%EC%9B%90%EC%BA%A0%ED%95%91-%EC%9D%B4%EB%B2%A4%ED%8A%B8.jpg',
      title: '초보 캠퍼들을 위한 가이드',
    },
    {
      thumbImage:
        'https://pensiongaja.com/_data/ykpension/info/elpark130_0.jpg',
      title: '와이 글램핑 가격이 와이!라누!',
    },
    {
      thumbImage:
        'https://p4.wallpaperbetter.com/wallpaper/730/267/668/tent-camping-mountains-landscape-wallpaper-preview.jpg',
      title: '이런 배경화면은 어때?',
    },
  ];

  imageClickHandler(title) {
    this.router.navigateByUrl('starlightcamping/home/mainhome');
    console.log(title);
  }
  notices: noticeas[] = [];
  items = events;
  @ViewChild('cDataGrid') cDataGrid!: ClrDatagrid;
  cDataLoading: boolean = false;
  cSelection: any;
  keyword?: string;
  searchText?: any;

  columnDefs = [
    { headerName: '분류' },
    { headerName: '제목' },
    { headerName: '작성자' },
    { headerName: '생성일' },
  ];
  nocolumnDefs = [
    { headerName: '공지' },
    {
      headerName: '글 제목',
    },
    { headerName: '작성자' },
    { headerName: '날짜' },
  ];

  @ViewChild('getnotice', { static: false }) noticemodal!: NoticeboardComponent;
  detailnotices(id: string) {
    this.id = id;
    this.noticemodal.open();
    this.restService.detailnotice(id).subscribe((resp: any) => {
      this.item = resp;
      console.log(resp);
    });
  }
  @ViewChild('getevent', { static: false }) DetailModal!: EventsComponent;
  @ViewChild('getevent2', { static: false }) DetailModal2!: Events2Component;

  detail(id: string) {
    console.log(id);
    this.id = id;
    if (id === '2') {
      this.DetailModal.open();
    } else {
      this.DetailModal2.open();
    }
  }

  async getnotices() {
    if (this.cDataLoading) return;
    this.cDataLoading = false;
    await this.restService.getnotice().subscribe((resp: any) => {
      this.notices = resp;
      this.totalCount = parseInt(resp.totalCount!);
      this.cDataLoading = false;
    });
  }
}
