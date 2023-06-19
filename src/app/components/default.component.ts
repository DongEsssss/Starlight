import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../services/dialog';
import { EventService } from '../services/event/event.service';
import { MessageService } from '../services/message/message.service';
import { RestService } from '../services/rest/rest.service';
import { SessionService } from '../services/session/session.service';
import { CARD_VIEW_LOCALSTORAGE_KEY, FALSE_STR, TRUE_STR} from '../utils/shared.utils';
import { DefaultFormComponent } from './default.form.component';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/TodoService/todo.service';

@Component({
  template: '',
})
export class DefaultComponent implements OnInit, OnDestroy, AfterViewInit {
  opened: boolean;
  isCardView!: boolean;
  cardHover = false;
  listHover = false;
  static menuState: boolean = false
  interval: any = undefined
  isInit: boolean = false;
  courses?: any;
  message: string = 'loading :(';
  item: any;
  id: any;

  constructor(
    public cd: ChangeDetectorRef,
    public restService : RestService,
    public eventService: EventService,
    public session: SessionService,
    public dialog: DialogService,
    public el: ElementRef,
    public route: ActivatedRoute,
    public http: HttpClient,
    public messageservice: MessageService,
    public router: Router,
    public todoService: TodoService,
    public formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef

  ) {
  }
  ngOnInit(): void {

  }
  parentComponent?: DefaultComponent;
  callback?: DefaultComponent | DefaultFormComponent<any>;

  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

  ngOnCommonInit(): void {
    this.isInit = true;
  }

  ngOnDestroy(): void {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }

  showCard(cardView: boolean) {
    if (this.isCardView === cardView) {
      return;
    }
    this.isCardView = cardView;
    // manually run change detecting to avoid ng-change-checking error
    this.cdr.detectChanges();
    if (localStorage) {
      if (this.isCardView) {
        localStorage.setItem(CARD_VIEW_LOCALSTORAGE_KEY, TRUE_STR);
      } else {
        localStorage.setItem(CARD_VIEW_LOCALSTORAGE_KEY, FALSE_STR);
      }
    }
    if (this.isCardView) {
      this.return();
    }
  }
  mouseEnter(itemName: string) {
    if (itemName === 'card') {
      this.cardHover = true;
    } else {
      this.listHover = true;
    }
  }

  mouseLeave(itemName: string) {
    if (itemName === 'card') {
      this.cardHover = false;
    } else {
      this.listHover = false;
    }
  }

  isHovering(itemName: string) {
    if (itemName === 'card') {
      return this.cardHover;
    } else {
      return this.listHover;
    }
  }
  return() {

  }
  //Fetch Data
  loading = true;
  selected = [];
  current = 1;

  fetchData(clearSelection = true) {
    this.loading = true;
  }
  refetech() {
    location.reload();
  }

  // getpagesize
  pagenationSize: number = 100;
  page: number = 1;
  totalCount: number = 0;


  onRefresh() {
    location.reload();
  }

  onModalResponse(code: number, data?: any) {

  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }
}
