import { Component, ViewChild } from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import { Card } from 'src/app/models/Card';
import { Dudtnwmd2Component } from 'src/app/views/modals/dudtnwmd2/dudtnwmd2.component';
import { Dudwnwmd1Component } from 'src/app/views/modals/dudwnwmd1/dudwnwmd1.component';

@Component({
  selector: 'app-usecard',
  templateUrl: './usecard.component.html',
  styleUrls: ['./usecard.component.css']
})
export class UsecardComponent extends DefaultComponent {
 card = Card;
  cDataLoading = false;
  cSelection?:any;
  @ViewChild('tnwmd1', {static: false}) tnwm1 !: Dudwnwmd1Component;

  dudwnwmd1() {
    this.tnwm1.open();
  }
  @ViewChild('tnwmd2', {static: false}) tnwm2 !: Dudtnwmd2Component;

  dudwnwmd2() {
    this.tnwm2.open();
  }
}
