import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { camp } from 'src/app/models/Camp';
import { noticeas } from 'src/app/models/Noticeboard';
import { reserve } from 'src/app/models/Reserve';
import { cafe } from 'src/app/models/cafe';
import { inquiry } from 'src/app/models/inquriy';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const camps = 'http://localhost:8000/camp';
const reserves = 'http://localhost:8000/reserve';
const inquirys = 'http://localhost:8000/inquiry';
const snss = 'http://localhost:8000/sns';
const notices = 'http://localhost:8000/notice';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }

  getcamp(): Observable<any> {
    const url = camps;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }

  getcampdetail(id: string): Observable<any> {
    const url = camps + '/' + id;
    console.log(url);
    return this.http
      .get<camp>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  deletecamp(id: any): Observable<any> {
    const url = camps + '/' + id;
    return this.http
      .delete<camp>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  //==-------------------------------------------------------

  getreserve(): Observable<any> {
    const url = reserves;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }
  getreservedetail(id: string): Observable<any> {
    const url = reserves + '/' + id;
    console.log(url);
    return this.http
      .get<reserve>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  createreserve(reserveas: any): Observable<any> {
    const url = reserves;
    return this.http
      .post<reserve>(url, reserveas, httpOptions)
      .pipe(catchError(this.handleError));
  }
  deletereserve(id: any): Observable<any> {
    const url = reserves + '/' + id;

    return this.http
      .delete<reserve>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  //==-------------------------------------------------------
  getinquiry(): Observable<any> {
    const url = inquirys;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }
  getinquirydetail(id: string): Observable<any> {
    const url = inquirys + '/' + id;
    console.log(url);
    return this.http
      .get<inquiry>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  createinquriy(inquiryas: any): Observable<any> {
    const url = inquirys;
    return this.http
      .post<inquiry>(url, inquiryas, httpOptions)
      .pipe(catchError(this.handleError));
  }
  deleteinquriy(id: any): Observable<any> {
    const url = inquirys + '/' + id;
    return this.http
      .delete<inquiry>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  //==-------------------------------------------------------
  getsns(): Observable<any> {
    const url = snss;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }
  detailsns(id: string): Observable<any> {
    const url = snss + '/' + id;
    console.log(url);
    return this.http
      .get<cafe>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  createsns(snsas: any): Observable<any> {
    const url = snss;
    return this.http
      .post<cafe>(url, snsas, httpOptions)
      .pipe(catchError(this.handleError));
  }
  deletesns(id: any): Observable<any> {
    const url = snss + '/' + id;
    return this.http
      .delete<cafe>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
  //==-------------------------------------------------------
  getnotice(): Observable<any> {
    const url = notices;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }
  detailnotice(id: string): Observable<any> {
    const url = notices + '/' + id;
    console.log(url);
    return this.http
      .get<noticeas>(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
