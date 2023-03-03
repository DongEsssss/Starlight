
import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { FormField } from "../models/common";
import { DefaultComponent } from "./default.component";
import { AngularEditorConfig } from "@kolkov/angular-editor";

@Component({
    template: ''
})

export class DefaultModalComponent<T> implements OnInit, OnDestroy {
    

    @ViewChild("modalFrom", { static: true })
    modalForm!: NgForm;
    parentComponent?: DefaultComponent;
    isEditable = false;
    newForm: Array<FormField> = [];
    editForm: Array<FormField> = [];
    error: any;
    opened: boolean = false;

    ngOnDestroy(): void {
    }
    public get isValid(): boolean {
        if (this.modalForm == undefined) return false;
        var v = true;

        for (var field of this.isEditable ? this.editForm : this.newForm) {
            if (this.modalForm.controls[field.name!]?.value == undefined) {
                v = false;
            }
        }
        return v;
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
