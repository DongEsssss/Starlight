import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { asset_post } from 'src/app/models/asset_post';
// import { SERVER_URL } from 'src/app/utils/shared.utils';

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'password',
    'Content-Type': 'application/json',
  }),
};

const Http = 'http://';
const Pi = '192.168.0.5:8182';
const v1 = '/api/v1/management';

export const API_URL = Http + Pi + v1;

/** Assets URL **/
const URL_ASSET_REQUEST = '/assets/request';                        //데이터 불러오기 post
const URL_ASSET_ADD = '/assets';                                    //데이터 추가하기 post
const URL_GET_ASSETS = '/assets/{asset_id}'                         //특성 id를 가진 asset 검색
const URL_GET_ASSETS_DATAADDRESS = '/assets/{asset_id}/address'     //특성 id를 가진 address 검색
const URL_ASSET_DELETE = "/assets/";                   //데이터 삭제하기



@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse):any {
    let message = '';

    if (error.error instanceof ErrorEvent) {
      console.error(`client ERR ${error.error.message}`);
      message = error.error.message;
    } else {
      console.error(`Server ERR ${error.status}`);
      message = error.message;
    }
    return throwError( 'ERR x_x;;' );
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
  // =================== Assets ===================
  getRequestAsset(): Observable<any> {
    const url = API_URL + URL_ASSET_REQUEST;
    return this.http.post(url, null, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addAsset(asset: asset_post): Observable<any>{
    let url = API_URL + URL_ASSET_ADD
    return this.http.post(url, asset, httpOptions)
    .pipe(catchError(this.handleError));
  }
}

