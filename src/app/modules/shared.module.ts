import {NgModule} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AngularResizeEventModule} from 'angular-resize-event'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularResizeEventModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularResizeEventModule,
  ],
  providers: []
})
export class SharedModule {
}
@NgModule({
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    HttpClientTestingModule,
    RouterTestingModule,
  ],
  exports: [
    BrowserAnimationsModule,
    SharedModule,
    HttpClientTestingModule,
    RouterTestingModule,
  ],
  providers: []
})
export class SharedTestingModule {
}
