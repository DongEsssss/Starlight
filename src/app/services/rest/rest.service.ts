import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Asset } from 'src/app/models/assets';
import { ResultBody } from 'src/app/models/resultbody';
// import { SERVER_URL } from 'src/app/utils/shared.utils';

const httpOptions = {
  headers: new HttpHeaders({
    'x-api-key': 'password',
    'Content-Type': 'application/json'
  }),
};

const Http = "http://"
const Pi = "192.168.0.101:8182"
const v1 = "/api/v1/management"

export const API_URL = Http + Pi + v1;

/** Assets URL **/
const URL_ASSET_ADD = '/assets';
const URL_ASSET_PAGE = "/assets/page";
const URL_ASSET_REQUEST = '/assets/request'
const URL_ASSET_DELETE = '/assets/delete'
const URL_GET_ASSET = '/assets/'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  // =================assets===================
  requestAssets(): Observable<ResultBody<Asset>> {
    const url = API_URL + URL_ASSET_REQUEST;
    return this.http.post<ResultBody<Asset>>(url, null, httpOptions).pipe(
      catchError(this.handleError<ResultBody<Asset>>('RequestAsset'))
    );
  }
  // createAsset(asset : FormData): Observable<ResultBody<Asset>> {
  //   const url = API_URL + URL_ASSET_ADD;
  //   return this.http.post<ResultBody<Asset>>(url, asset, httpOptions).pipe(
  //     catchError(this.handleError<ResultBody<Asset>>('CreateAssets'))
  //   );
  // }

  getAssets(){
    var url = API_URL + URL_GET_ASSET;
    return this.http.get<ResultBody<Asset>>(url)
      .pipe(
        //tap(_ => console.log('fetched PointList')),
        catchError(this.handleError('getUserist', new ResultBody<Asset>(-1)))
      );
  }

  // getAssetDataAddress(){
  // }

  // removeAsset(asset : Asset){
  //   const url = API_URL + URL_ASSET_DELETE;
  //   return this.http.post<ResultBody<Asset>>(url, asset, httpOptions).pipe(
  //     catchError(this.handleError<ResultBody<Asset>>('RemoveAsset'))
  //   );
  // }


}
