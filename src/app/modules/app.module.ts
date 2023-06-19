import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgImageSliderModule } from 'ng-image-slider';

import { ClarityModule } from "@clr/angular";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TagInputModule } from 'ngx-chips';
import { AppComponent } from '../views/page/app/app.component'
import { SessionService } from '../services/session/session.service';
import { DialogModule } from '../services/dialog/dialog.module';

import { HttpClientModule,  } from '@angular/common/http';
import { RestService } from '../services/rest/rest.service';
import { TodoService } from '../services/TodoService/todo.service';
import { NgxSandCreditCardsModule } from 'ngx-sand-credit-cards'
import { IMaskModule} from 'angular-imask';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    TagInputModule,
    DialogModule,
    CommonModule,
    NgImageSliderModule,
    NgxSandCreditCardsModule,
    IMaskModule,
    ScrollingModule
  ],
  providers: [
    SessionService,
    RestService,
    TodoService
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
