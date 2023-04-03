import {Injectable} from '@angular/core';
import { RestService } from '../rest/rest.service';
import { EventService } from '../event/event.service';
import { asset_post, contentList } from 'src/app/models/asset_post';
import { CommonCD } from 'src/app/models/common';

export const COMMON_CODE_CANCODE: string = "03";
export const COMMON_CODE_FAILCODE: string = "04";
export const COMMON_CODE_TYPE: string = "11";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  isComplete:boolean = false
  commonCodeList: CommonCD[] = [];
  contentList : contentList[] =[];

  constructor(
    private restService: RestService,
    private eventService: EventService
  ) {}


  assetList: asset_post[] = [];

  getRequestAsset(): asset_post[]{
    return this.assetList;
  }
  getassetaddress(): asset_post[]{
    return this.assetList;
  }
  getCommonList(): CommonCD[] {
    return this.commonCodeList;
  }
  getcontentListt(): contentList[] {
    return this.contentList;
  }
}
