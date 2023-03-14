import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import { take, tap } from "rxjs";
import {CommonServiceService} from "../services/common/common.service.service";
import {DialogService} from "../services/dialog";
import {EventService} from "../services/event/event.service";
import {RestService} from "../services/rest/rest.service";
import {SessionService} from "../services/session/session.service";
import { CARD_VIEW_LOCALSTORAGE_KEY, FALSE_STR, TRUE_STR } from "../utils/shared.utils";


@Component({
  template: ''
})

export class DefaultComponent implements OnInit, OnDestroy {
  isCardView !: boolean;
  cardHover = false;
  listHover = false;

  constructor(
    public cd: ChangeDetectorRef,
    public restService: RestService,
    public commonService: CommonServiceService,
    public eventService: EventService,
    public session: SessionService,
    public dialog: DialogService,
    public el: ElementRef,
  ) {
    if (localStorage) {
      this.isCardView =
        localStorage.getItem(CARD_VIEW_LOCALSTORAGE_KEY) === TRUE_STR;
    }
  }
  static menuState: boolean = false
  assetList:any;
  assetList$:any;
  ngOnInit(): void {
    this.assetList = this.restService.requestAssets()
    .pipe(tap((assetList) => (this.assetList$=this.assetList)));
  }

  ngOnDestroy(): void {
  }

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
  refresh() {
    location.reload();
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
}
