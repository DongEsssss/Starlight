import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityIcons, userIcon} from '@cds/core/icon'

import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {ClarityModule} from "@clr/angular";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {TagInputModule} from 'ngx-chips';

import {AppComponent} from '../views/page/app/app.component'
import {EventService} from '../services/event/event.service';
import {SessionService} from '../services/session/session.service';
import {DialogModule} from '../services/dialog/dialog.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    TagInputModule,
    DialogModule,
  ],
  providers: [
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  recevedMessages: string[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }
}
