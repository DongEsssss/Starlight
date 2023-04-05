import {Component, ChangeDetectorRef} from '@angular/core';
import { DefaultComponent } from 'src/app/components/default.component';
import {CARD_VIEW_LOCALSTORAGE_KEY, FALSE_STR, TRUE_STR} from 'src/app/utils/shared.utils';
import {ClrDatagrid} from '@clr/angular';

@Component({
  selector: 'app-catalog-browser',
  templateUrl: './catalog-browser.component.html',
  styleUrls: ['./catalog-browser.component.css']
})
export class CatalogBrowserComponent extends DefaultComponent {
  cDataLoading: boolean = false;
  cSelection ?: any;

}
