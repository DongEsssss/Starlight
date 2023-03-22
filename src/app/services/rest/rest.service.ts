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

const API_URL = 'http://192.168.0.5:8182/api/v1/management';

/** Assets URL **/
const URL_ASSET_REQUEST = '/assets/request';                        //데이터 불러오기 post
const URL_ASSET_ADD = '/assets';                                    //데이터 추가하기 post
const URL_GET_ASSETS = '/assets/{asset_id}'                         //특성 id를 가진 asset 검색
const URL_GET_ASSETS_DATAADDRESS = '/assets/{asset_id}/address'     //특성 id를 가진 address 검색
const URL_ASSET_DELETE = "/assets/";                                //데이터 삭제하기



@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

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

  // =================== Assets ===================
  getRequestAsset(): Observable<any> {
    const url = API_URL + URL_ASSET_REQUEST;
    return this.http.post(url, null, httpOptions)
    .pipe(catchError(this.handleError));
  }

  createAsset(assetitem : asset_post):Observable<any>{
    const url = API_URL + URL_ASSET_ADD;
    return this.http.post<asset_post>(url, assetitem, httpOptions)
    .pipe(catchError(this.handleError));
  }

  deleteAssets(id : any): Observable<any> {
    // const url = API_URL + URL_ASSET_DELETE + '/' + id
    return this.http.delete<any>(`${API_URL}${URL_ASSET_DELETE}${id}`, httpOptions)
    .pipe(catchError(this.handleError));
  }
}
