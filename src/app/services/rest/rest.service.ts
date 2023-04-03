import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';


// import { SERVER_URL } from 'src/app/utils/shared.utils';

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'password',
    'Content-Type': 'application/json',
  }),
};

const API_URL = 'http://192.168.0.5:8182/api/v1/management';

const URL_ASSET_REQUEST = '/assets/request';                        //데이터 불러오기 post
const URL_ASSET_ADD = '/assets';                                    //데이터 추가하기 post
const URL_GET_ASSETS = '/assets/'                                   //특성 id를 가진 asset 검색
const URL_GET_ASSETS_DATAADDRESS = '/address'                       //특성 id를 가진 address 검색
const URL_ASSET_DELETE = "/assets/";                                //데이터 삭제하기

const URL_POLICY_REQUEST = '/policydefinitions/request'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(
    private http: HttpClient,
    ) { }
  
  private handleError<T>(error: HttpErrorResponse, result?: any): any {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  // fetch
  get() {
    let url = `${API_URL}${URL_ASSET_REQUEST}`;
    return this.http.get(url);
  }

  // // =================== Assets ===================
  getRequestAsset(): Observable<any> {
    const url = API_URL + URL_ASSET_REQUEST;
    return this.http.post(url, null, httpOptions)
    .pipe(catchError(this.handleError));
  }

  createAsset(asset : any):Observable<any>{
    const url = API_URL + URL_ASSET_ADD;
    return this.http.post(url, asset, httpOptions).pipe(
    catchError(this.handleError)
    );
  }

  // getasset(assetid : any): Observable<any>{
  //   const url = API_URL + URL_GET_ASSETS  + assetid;
  //   return this.http.get<asset_post[]>(url, httpOptions)
  //   .pipe(catchError(this.handleError));
  // }

  // getassetaddress(id : any) : Observable<any>{
  //   const url = API_URL + URL_GET_ASSETS  + id + URL_GET_ASSETS_DATAADDRESS;
  //   return this.http.get<asset_post[]>(url, httpOptions)
  //   .pipe(catchError(this.handleError))
  // }

  // deleteAssets(id :any): Observable<any> {
  //   const url = API_URL + URL_ASSET_DELETE  + id;
  //   return this.http.delete<any>(url, httpOptions)
  //   .pipe(catchError(this.handleError));
  // }

  // =================== Policy ===================
  getRequestPolicy(): Observable<any> {
    const url = API_URL + URL_POLICY_REQUEST;
    return this.http.post(url, null, httpOptions)
      .pipe(catchError(this.handleError));
  }
  createpolicy() {
    const url = API_URL + URL_POLICY_REQUEST;
    return this.http.post(url, null, httpOptions)
      .pipe(catchError(this.handleError));
  }
  // =================== Transfer History ===================

  gettransfer(): Observable<any> {
    const url = 'http://192.168.0.5:9192/api/v1/management/transferprocess'
    return this.http.post(url, null, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
