import {Component, ElementRef, OnDestroy, OnInit} from "@angular/core";
import {CommonServiceService} from "../services/common/common.service.service";
import {DialogService} from "../services/dialog";
import {EventService} from "../services/event/event.service";
import {RestService} from "../services/rest/rest.service";
import {SessionService} from "../services/session/session.service";


@Component({
  template: ''
})

export class DefaultComponent implements OnInit, OnDestroy {

  constructor(
    public restService: RestService,
    public commonService: CommonServiceService,
    public eventService: EventService,
    public session: SessionService,
    public dialog: DialogService,
    public el: ElementRef,
  ) {
  }

  static menuState: boolean = false
  interval: any = undefined

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.interval != null) {
      clearInterval(this.interval)
    }
  }


}
