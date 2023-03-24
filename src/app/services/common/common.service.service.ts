import {Injectable} from '@angular/core';
import { RestService } from '../rest/rest.service';
import { EventService } from '../event/event.service';
import { asset_post, dataasset } from 'src/app/models/asset_post';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  isComplete:boolean = false

  constructor(
    private restService: RestService,
    private eventService: EventService
  ) {}


  assetList: asset_post[] = [];
  dataassets : dataasset[]= [];

  getRequestAsset(): asset_post[]{
    return this.assetList;
  }
  getassetaddress() : dataasset[]{
    return this.dataassets
  }
}
