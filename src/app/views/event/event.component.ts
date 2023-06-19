import { DefaultComponent } from 'src/app/components/default.component';
import { EventsComponent } from '../detail/events/events.component';
import { Events2Component } from '../detail/events2/events2.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { event, events } from 'src/app/models/Eventboard';
import { ClrDatagrid } from '@clr/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent extends DefaultComponent implements OnInit {
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
}
