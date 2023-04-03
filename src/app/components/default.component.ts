import { HttpClient, HttpParams } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from '../services/common/common.service.service';
import { DialogService } from '../services/dialog';
import { EventService } from '../services/event/event.service';
import { MessageService } from '../services/message/message.service';
import { RestService } from '../services/rest/rest.service';
import { SessionService } from '../services/session/session.service';
import {
  CARD_VIEW_LOCALSTORAGE_KEY,
  FALSE_STR,
  TRUE_STR,
} from '../utils/shared.utils';
import { ClrModal } from '@clr/angular';

@Component({
  template: '',
})
export class DefaultComponent implements OnInit, OnDestroy, AfterViewInit {

  onModalResponse(MODAL_RES_CLOSE: number, callbackData: any) {

  }
  isCardView!: boolean;
  cardHover = false;
  listHover = false;
  static menuState: boolean = false
  interval: any = undefined
  isInit: boolean = false;
  courses?: any;
  message: string = 'loading :(';

  constructor(
    public restService: RestService,
    public commonService: CommonServiceService,
    public eventService: EventService,
    public session: SessionService,
    public dialog: DialogService,
    public el: ElementRef,
    public route: ActivatedRoute,
    public http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.eventService.LoadCommonDataEvent.subscribe(() => {
      this.ngOnCommonInit();
    });

    if (this.commonService.isComplete && !this.isInit) {
      this.ngOnCommonInit();
    }
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
  return() {
    location.reload();
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
  getPageSize(page: number, size: number, total: number): string {
    return `${((page - 1) * size) + 1}  -  ${(page - 1) * size + size} of Total ${total}`;
  }

  onRefresh() {

  }
  //Fetch Data
  loading = true;
  selected = [];
  current = 1;

  fetchData(clearSelection = true) {
    this.loading = true;
  }

  //wizard
  validationStateMap: any = {};
  getValidationState(key: string): boolean {
    return !this.validationStateMap[key];
  }
}
