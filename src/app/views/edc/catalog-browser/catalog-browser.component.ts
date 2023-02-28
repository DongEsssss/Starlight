import { Component, ChangeDetectorRef } from '@angular/core';
import { Asset, assets } from 'src/app/models/assets';
import { CARD_VIEW_LOCALSTORAGE_KEY, FALSE_STR, TRUE_STR } from 'src/app/utils/shared.utils';
import { ClrDatagrid } from '@clr/angular';

@Component({
  selector: 'app-catalog-browser',
  templateUrl: './catalog-browser.component.html',
  styleUrls: ['./catalog-browser.component.css']
})
export class CatalogBrowserComponent {
  assets = assets;
  cDataLoading:boolean = false;
  cSelection ?: any;
  isCardView !: boolean;
  cardHover = false;
  listHover = false;
  AssetList : Asset[] = [];
  totalCount: number = 0;
  page:number = 1;
  pagenationSize = 99;

  constructor(
    private cd: ChangeDetectorRef
  ){
    if (localStorage) {
      this.isCardView =
          localStorage.getItem(CARD_VIEW_LOCALSTORAGE_KEY) === TRUE_STR;
  }
  }
  searchText !: any;
  showCard(cardView: boolean) {
    if (this.isCardView === cardView) {
      return;
    }
    this.isCardView = cardView;
    // manually run change detecting to avoid ng-change-checking error
    this.cd.detectChanges();
    if (localStorage) {
      if (this.isCardView) {
        localStorage.setItem(CARD_VIEW_LOCALSTORAGE_KEY, TRUE_STR);
      } else {
        localStorage.setItem(CARD_VIEW_LOCALSTORAGE_KEY, FALSE_STR);
      }
    }
    if (this.isCardView) {
      this.refresh();
    }
  }

  mouseEnter(itemName: string) {
    if (itemName === 'card') {
      this.cardHover = true;
    } else {
      this.listHover = true;
    }
  }

  mouseLeave(itemName: string) {
    if (itemName === 'card') {
      this.cardHover = false;
    } else {
      this.listHover = false;
    }
  }

  isHovering(itemName: string) {
    if (itemName === 'card') {
      return this.cardHover;
    } else {
      return this.listHover;
    }
  }
  onrefresh() {
    location.reload();
  }


  /** datagrid */
  columnDefs = [
    {headerName:'AssetNM', field : 'assetnm'},
    {headerName:'Assetsub', field:'assetsub'},
    {headerName:'AssetTitle', field:'assettitle'},
    {headerName:'Assetcontent', field:'assetscontent'}
  ];
  getField(AssetList:Asset, key:string){
    return AssetList[key as keyof Asset];
  }

  onRefresh(): void {
    // console.log(this.gridApi.setdatasou');
    // this.gridApi.refreshServerSide();
  }
  refresh(){
    location.reload();
  }
}
