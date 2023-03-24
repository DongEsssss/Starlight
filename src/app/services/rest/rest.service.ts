import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { asset_post } from 'src/app/models/asset_post';


// import { SERVER_URL } from 'src/app/utils/shared.utils';

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'password',
    'Content-Type': 'application/json',
  }),
};

const API_URL = 'http://localhost:8182/api/v1/management';
const URL_ASSET_REQUEST = '/assets/request';                        //데이터 불러오기 post
const URL_ASSET_ADD = '/assets';                                    //데이터 추가하기 post
const URL_GET_ASSETS = '/assets/'                                   //특성 id를 가진 asset 검색
const URL_GET_ASSETS_DATAADDRESS= '/address'                        //특성 id를 가진 address 검색
const URL_ASSET_DELETE = "/assets/";                                //데이터 삭제하기



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
  // fetch
  get() {
    let url = `${API_URL}${URL_ASSET_REQUEST}`;
    return this.http.get(url);
  }
  // =================== Assets ===================
  getRequestAsset(): Observable<any> {
    const url = API_URL + URL_ASSET_REQUEST;
    return this.http.post(url, null, httpOptions)
    .pipe(catchError(this.handleError));
  }

  createAsset(asset_post : asset_post):Observable<any>{
    const url = API_URL + URL_ASSET_ADD;
    return this.http.post<asset_post>(url, asset_post, httpOptions)
    .pipe(catchError(this.handleError));
  }

  getasset(id : any): Observable<any>{
    const url = API_URL + URL_GET_ASSETS  + id;
    return this.http.get(url, httpOptions)
    .pipe(catchError(this.handleError))
  }

  getassetaddress(id : string) : Observable<any>{
    const url = API_URL + URL_GET_ASSETS  + id  +URL_GET_ASSETS_DATAADDRESS;
    return this.http.get(url, httpOptions)
    .pipe(catchError(this.handleError))
  }

  deleteAssets(id :any): Observable<any> {
    const url = API_URL + URL_ASSET_DELETE  + id;
    return this.http.delete<any>(url, httpOptions)
    .pipe(catchError(this.handleError));
  }

  // =================== Policy ===================
}
