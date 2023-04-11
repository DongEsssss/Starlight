import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { asset_post } from 'src/app/models/asset_post';
import { policyList } from 'src/app/models/policies';
import { definitions } from 'src/app/models/contract-definitions';


// import { SERVER_URL } from 'src/app/utils/shared.utils';

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'password',
    'Content-Type': 'application/json',
  }),
};

const API_URL = 'http://192.168.0.5:8182/api/v1/management';

const URL_ASSET_REQUEST = '/assets/request';                        //데이터 불러오기 post
const URL_ASSET_ADD = '/assets/';                                   //데이터 추가하기 post
const URL_GET_ASSETS = '/assets/'                                   //특정 id를 가진 asset 검색
const URL_GET_ASSETS_DATAADDRESS = '/address'                       //특정 id를 가진 address 검색
const URL_ASSET_DELETE = "/assets/";                                //특정 id를 가진 asset 삭제

const URL_POLICY_REQUEST = '/policydefinitions/request';
const URL_POLICY_ADD = '/policydefinitions/'
const URL_POLICY_DELETE = '/policydefinitions/'

const URL_DEFINITION_REQUEST = '/contractdefinitions/request'
const URL_DEFINITION_ADD = '/contractdefinitions/'
const URL_GET_DEFINITION = '/contractdefinitions/'
const URL_DEFINITION_DELETE = '/contractdefinitions/'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  log: any;
  constructor(
    private http: HttpClient,
  ) { }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
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

  createAsset(asset: any): Observable<any> {
    const url = API_URL + URL_ASSET_ADD;
    return this.http.post<asset_post>(url, asset, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getasset(id: string): Observable<any> {
    const url = API_URL + URL_GET_ASSETS + id;
    return this.http.get<asset_post>(url, httpOptions)
      .pipe(tap(_ => this.log(`fetched asset id= %{id}`)),
        catchError(this.handleError));
  }

  getassetaddress(id: any): Observable<any> {
    const url = API_URL + URL_GET_ASSETS + 'test11' + URL_GET_ASSETS_DATAADDRESS;
    return this.http.get<asset_post>(url, httpOptions)
      .pipe(catchError(this.handleError))
  }

  deleteAssets(id: any): Observable<any> {
    const url = API_URL + URL_ASSET_DELETE + id;
    return this.http.delete<asset_post>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // =================== Policy ===================
  getRequestPolicy(): Observable<any> {
    const url = API_URL + URL_POLICY_REQUEST;
    return this.http.post(url, null, httpOptions)
      .pipe(catchError(this.handleError));
  }

  createpolicy(policy: any): Observable<any> {
    const url = API_URL + URL_POLICY_ADD;
    return this.http.post<policyList>(url, policy, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deletepolicy(id: any): Observable<any> {
    const url = API_URL + URL_POLICY_DELETE + id;
    return this.http.delete<policyList>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }


  // const URL_DEFINITION_REQUEST = '/contractdefinitions/request'
  // const URL_DEFINITION_ADD = '/contractdefinitions'
  // const URL_GET_DEFINITION = '/contractdefinitions'
  // const URL_DEFINITION_DELETE = '/contractdefinitions'

  // =================== Contract Definition ===================
  getRequestDefintion(): Observable<any> {
    const url = API_URL + URL_DEFINITION_REQUEST;
    return this.http.post(url, null, httpOptions)
      .pipe(catchError(this.handleError));
  }

  createDefinition(definitions: any): Observable<any> {
    const url = API_URL + URL_DEFINITION_ADD;
    return this.http.post<definitions>(url, definitions, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteDefinition(id: any): Observable<any> {
    const url = API_URL + URL_DEFINITION_DELETE + id;
    return this.http.delete<definitions>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // =================== Transfer History ===================

  gettransfer(): Observable<any> {
    const url = 'http://192.168.0.5:9192/api/v1/management/transferprocess'
    return this.http.post(url, null, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
