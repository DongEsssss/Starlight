import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClarityModule} from '@clr/angular';
import {DialogComponent} from './dialog.component';


@NgModule({
  declarations: [
    DialogComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [
    DialogComponent,
  ]
})
export class DialogModule {
}
