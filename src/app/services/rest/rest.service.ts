import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,} from 'rxjs/operators';
import { nullUndif, SERVER_URL } from 'src/app/utils/shared.utils';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
export const API_URL = SERVER_URL;// + '/api/v1';

/**     COMMON API     **/
const URL_COMMON_LIST = "/comm/list";

@Injectable({
  providedIn: 'root'
})

export class RestService {
  getUserPage(page: number, select: string, keyword: string | undefined) {
    throw new Error('Method not implemented.');
  }
}