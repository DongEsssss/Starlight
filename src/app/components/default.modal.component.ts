import {Component, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {DefaultComponent} from "./default.component";


@Component({
  template: ''
})

export class DefaultModalComponent<T> implements OnInit, OnDestroy {
  @ViewChild("modalFrom", {static: true})
  modalForm!: NgForm;
  parentComponent?: DefaultComponent;
  isEditable = false;
  error: any;
  opened: boolean = false;

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }
}
