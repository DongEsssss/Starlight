import {NgModule} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';

import {HttpClientTestingModule} from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AngularResizeEventModule} from 'angular-resize-event'
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { IMaskModule } from 'angular-imask';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgImageSliderModule,
    AngularResizeEventModule,
    ReactiveFormsModule,
    HttpClientModule,
    IMaskModule,
    ScrollingModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgImageSliderModule,
    AngularResizeEventModule,
    ReactiveFormsModule,
    HttpClientModule,
    IMaskModule,
    ScrollingModule
  ],
  providers: []
})
export class SharedModule {
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientTestingModule,
    RouterTestingModule,
    HttpClientModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientTestingModule,
    RouterTestingModule,
    HttpClientModule,
  ],
  providers: []
})
export class SharedTestingModule {
}
