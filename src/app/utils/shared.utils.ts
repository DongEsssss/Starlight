import {NgForm} from '@angular/forms';
import {HttpHeaders, HttpParams} from "@angular/common/http";

export const DEV_MODE = true;
export const DEV_SERVER_URL = '192.168.0.101:8182';
export const STA_SERVER_URL = '';

export const SERVER_URL = DEV_MODE?DEV_SERVER_URL:STA_SERVER_URL;

export const APP_NAME = 'vcpx';
export const APP_ROOT = (APP_NAME.length > 0 ? '/' : '') + APP_NAME;

export const HTTP_CODE_SUCCESS = 200;
export const HTTP_CODE_FAILURE = -1;

export const PAGE_SIZE = 10;

export const TRUE_STR: string = 'true';
export const FALSE_STR: string = 'false';
export const CARD_VIEW_LOCALSTORAGE_KEY = 'card-view';
export const PROJECT_SUMMARY_CARD_VIEW_LOCALSTORAGE_KEY = 'project_card-view';

export const MODAL_RES_CANCEL = 2000;
export const MODAL_RES_CLOSE = 1000;

enum APILevels {
  V1 = '/v1',
  V2 = '/v2'
}

export const V1_BASE_HREF = '/api' + APILevels.V1;
export const CURRENT_BASE_HREF = '/api' + APILevels.V2;

export const DEFAULT_PAGE_SIZE: number = 30;


export const nullUndif = (null || undefined)

/**
 * To check if form is empty
 */
export const isEmptyForm = function (ngForm: NgForm): boolean {
  if (ngForm && ngForm.form) {
    let values = ngForm.form.value;
    if (values) {
      for (let key in values) {
        if (values[key]) {
          return false;
        }
      }
    }

  }

  return true;
};

// Provide capability of reconstructing the query paramter
export const maintainUrlQueryParmas = function (uri: string, key: string, value: string): string {
  let re: RegExp = new RegExp("([?&])" + key + "=.*?(&|#|$)", "i");
  if (value === undefined) {
    if (uri.match(re)) {
      return uri.replace(re, '$1$2');
    } else {
      return uri;
    }
  } else {
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
      let hash = '';
      if (uri.indexOf('#') !== -1) {
        hash = uri.replace(/.*#/, '#');
        uri = uri.replace(/#.*/, '');
      }
      let separator = uri.indexOf('?') !== -1 ? "&" : "?";
      return uri + separator + key + "=" + value + hash;
    }
  }
};

/**
 * the password or secret must longer than 8 chars with at least 1 uppercase letter, 1 lowercase letter and 1 number
 * @param randomFlag
 * @param min
 * @param max
 * @returns {string}
 */

export function randomWord(max: number) {
  let str = "";

  let contentArray = [['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'
      , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'
      , 'y', 'z'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
      , 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']];
  for (let i = 0; i < max; i++) {
    let randomNumber = getRandomInt(contentArray.length);
    str += contentArray[randomNumber][getRandomInt(contentArray[randomNumber].length)];
  }
  if (!str.match(/\d+/g)) {
    str += contentArray[0][getRandomInt(contentArray[0].length)];
  }
  if (!str.match(/[a-z]+/g)) {
    str += contentArray[1][getRandomInt(contentArray[1].length)];
  }
  if (!str.match(/[A-Z]+/g)) {
    str += contentArray[2][getRandomInt(contentArray[2].length)];
  }
  return str;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getChartAverage(list: Array<any>, time: number, timeRange: number, range: number) {
  var chartList = [];
  let avgg = timeRange / range;
  var sTime = time - timeRange + avgg;
  var vals = 0;
  var idx = 0;
  for (var i = 0; i < range; i++) {
    var isGet = false;
    if (idx >= list.length) {
    } else {
      var amr = 0;
      for (var y = idx; y < list.length; y++) {
        idx = y + 1;
        const latency = list[y];
        if (latency.time! <= sTime) {
          isGet = true;
          amr++;
          vals += latency.value!;
        } else {
          break;
        }
      }
      if (amr > 0) {
        vals = vals / amr
      }
    }
    if (isGet == true) {
      chartList.push([sTime, vals]);
    } else {
      chartList.push([sTime, 0]);
    }

    sTime = sTime + avgg;
    vals = 0;
  }
  return chartList;
}


export function getChartSummary(list: Array<any>, time: number, timeRange: number, range: number) {
  var chartList = [];
  let avgg = timeRange / range;
  var sTime = time - timeRange + avgg;
  var vals = 0;
  var idx = 0;
  for (var i = 0; i < range; i++) {
    var isGet = false;
    if (idx >= list.length) {
    } else {
      var amr = 0;
      for (var y = idx; y < list.length; y++) {
        idx = y + 1;
        const latency = list[y];
        if (latency.time! <= sTime) {
          isGet = true;
          amr++;
          vals += latency.value!;
        } else {
          break;
        }
      }
    }
    if (isGet == true) {
      chartList.push([sTime, vals]);
    } else {
      chartList.push([sTime, 0]);
    }

    sTime = sTime + avgg;
    vals = 0;
  }
  return chartList;
}

export function parseFloatfromIntegerString(fVal: any): string {
  if (typeof fVal == 'number') {
    return parseInt(fVal + '').toString();
  } else {
    return parseInt(fVal).toString();
  }
}


export const HTTP_JSON_OPTIONS: HttpOptionInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'application/json',
    "Accept": 'application/json'
  }),
  responseType: 'json'
};

export const HTTP_GET_OPTIONS: HttpOptionInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Cache-Control": 'no-cache',
    "Pragma": 'no-cache'
  }),
  responseType: 'json'
};
export const HTTP_GET_OPTIONS_OBSERVE_RESPONSE: HttpOptionInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Cache-Control": 'no-cache',
    "Pragma": 'no-cache'
  }),
  observe: 'response' as 'body',
  responseType: 'json'
};
export const HTTP_GET_OPTIONS_TEXT: HttpOptionTextInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Cache-Control": 'no-cache',
    "Pragma": 'no-cache'
  }),
  responseType: 'text'
};

export const HTTP_FORM_OPTIONS: HttpOptionInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'application/x-www-form-urlencoded'
  }),
  responseType: 'json'
};

export const HTTP_GET_HEADER: HttpHeaders = new HttpHeaders({
  "Content-Type": 'application/json',
  "Accept": 'application/json',
  "Cache-Control": 'no-cache',
  "Pragma": 'no-cache'
});

export const HTTP_GET_OPTIONS_CACHE: HttpOptionInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Cache-Control": 'no-cache',
    "Pragma": 'no-cache',
  }),
  responseType: 'json'
};

export const FILE_UPLOAD_OPTION: HttpOptionInterface = {
  headers: new HttpHeaders({
    "Content-Type": 'multipart/form-data',
  }),
  responseType: 'json'
};

export function buildHttpRequestOptions(params: HttpParams): HttpOptionInterface {
  let reqOptions: HttpOptionInterface = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      "Cache-Control": 'no-cache',
      "Pragma": 'no-cache'
    }),
    responseType: 'json',
  };
  if (params) {
    reqOptions.params = params;
  }

  return reqOptions;
}

export function buildHttpRequestOptionsWithObserveResponse(params: HttpParams): HttpOptionInterface {
  let reqOptions: HttpOptionInterface = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      "Cache-Control": 'no-cache',
      "Pragma": 'no-cache'
    }),
    responseType: 'json',
    observe: 'response' as 'body'
  };
  if (params) {
    reqOptions.params = params;
  }
  return reqOptions;
}

export interface HttpOptionInterface {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType: 'json';
  withCredentials?: boolean;
}

export interface HttpOptionTextInterface {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType: 'text';
  withCredentials?: boolean;
}

