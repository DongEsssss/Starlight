import {Component, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {DefaultComponent} from "./default.component";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import { DefaultFormComponent } from "./default.form.component";

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
