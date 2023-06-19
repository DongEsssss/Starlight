import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DialogService } from '../services/dialog';
import { EventService } from '../services/event/event.service';

import { SessionService } from '../services/session/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { InlineAlertComponent } from './inline-alert/inline-alert.component';
import { DefaultComponent } from './default.component';
import { HttpClient } from '@angular/common/http';
import {
  CARD_VIEW_LOCALSTORAGE_KEY,
  FALSE_STR,
  TRUE_STR,
} from '../utils/shared.utils';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest/rest.service';

@Component({
  template: '',
})
export class DefaultFormComponent<T> implements OnInit, OnDestroy {
  error: any;
  constructor(
    public formbulider: FormBuilder,
    public restService: RestService,
    public eventService: EventService,
    public session: SessionService,
    public dialog: DialogService,
    public http: HttpClient,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {}

  parentComponent?: DefaultComponent;
  opened: boolean = false;
  isInit: boolean = false;
  onGoing: boolean = false;
  formData!: T;
  isEditable = false;
  datatype: any;
  id: any;
  item: any;

  @ViewChild('modalFrom', { static: true })
  modalForm!: NgForm;

  @ViewChild(InlineAlertComponent)
  inlineAlert!: InlineAlertComponent;

  open(): void {
    this.opened = true;
  }

  ngOnCommonInit(): void {
    this.isInit = true;
  }

  ngOnDestroy(): void {}

  close(): void {
    this.opened = false;
  }

  onCloseModal() {}

  onRefresh() {
    location.reload();
  }

  validationStateMap: any = {};
  formValueChanged = false;

  getFormModel(name: string): any {
    return this.formData[name as keyof T];
  }

  getValidationState(key: string): boolean {
    return !this.validationStateMap[key];
  }
  onModalResponse(code: number, data?: any) {}

  resetFormModel() {
    this.modalForm.reset();
  }

  resetFormState() {
    this.validationStateMap = {};
  }
  public get inProgress(): boolean {
    return this.onGoing;
  }
  callback?: DefaultComponent;
  callbackData?: any;

  @Input() set setCallback(callback: DefaultComponent) {
    this.callback = callback;
  }

  @Input() set setCallbackData(callbackData: any) {
    this.callbackData = callbackData;
  }
  confirmCancel(event: boolean): void {
    this.close();
  }
  formValueChange(flag: any): void {
    if (this.error != null) {
      this.error = null; // clear error
    }

    this.formValueChanged = true;
    this.inlineAlert.close();
  }

  handleValidation(key: string, flag: boolean): void {
    if (flag) {
      // Checking
      let cont = this.modalForm.controls[key];
      if (cont) {
        this.validationStateMap[key] = cont.valid;
        // Check email existing from backend
        if (cont.valid && this.formValueChanged) {
        }
      }
    } else {
      // Reset
      this.validationStateMap[key] = true;
    }
  }
  public get isValid(): boolean {
    if (this.modalForm == undefined) return false;
    var v = true;
    return v;
  }

  //policy
  isCardView!: boolean;
  cardHover = false;
  listHover = false;

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
  return() {}
  //Fetch Data
  loading = true;
  selected = [];
  current = 1;

  fetchData(clearSelection = true) {
    this.loading = true;
  }
  onrefresh() {
    location.reload();
  }
  getPageSize(page: number, size: number, total: number): string {
    return `${(page - 1) * size + 1}  -  ${
      (page - 1) * size + size
    } of Total ${total}`;
  }
}
