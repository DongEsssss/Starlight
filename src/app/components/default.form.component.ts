import {Component, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {CommonServiceService} from "../services/common/common.service.service";
import {DialogService} from "../services/dialog";
import {EventService} from "../services/event/event.service";
import {RestService} from "../services/rest/rest.service";
import {SessionService} from "../services/session/session.service";
import {FormField} from "../models/common";
import {NgForm} from "@angular/forms";
import {InlineAlertComponent} from "./inline-alert/inline-alert.component";


@Component({
  template: ''
})

export class DefaultFormComponent<T> implements OnInit, OnDestroy {
  constructor(
    public restService: RestService,
    public commonService: CommonServiceService,
    public eventService: EventService,
    public session: SessionService,
    public dialog: DialogService
  ) {
  }

  opened: boolean = false;
  isInit: boolean = false;
  onGoing: boolean = false;

  @ViewChild("modalFrom", {static: true})
  modalForm!: NgForm;

  @ViewChild(InlineAlertComponent)
  inlineAlert!: InlineAlertComponent;

  open(): void {
    this.opened = true;
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    this.opened = false;
  }

  formData!: T;
  validationStateMap: any = {};
  formValueChanged = false;

  getFormModel(name: string): any {
    return this.formData[name as keyof T]
  }

  resetFormModel() {
    this.modalForm.reset();
  }

  resetFormState() {
    this.validationStateMap = {};
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
}
