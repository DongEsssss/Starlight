import {Injectable} from '@angular/core';
import { RestService } from '../rest/rest.service';
import { EventService } from '../event/event.service';
import { asset_post } from 'src/app/models/asset_post';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  isComplete:boolean = false

  constructor(
    private restService: RestService,
    private eventService: EventService
  ) {}
}
