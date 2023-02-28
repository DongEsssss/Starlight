import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { SignInCredential } from 'src/app/models/user';
import {
  HTTP_FORM_OPTIONS,
}  from 'src/app/utils/shared.utils';


const signInUrl =  '/user/login';
const signOffEndpoint = "/user/logout";


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public token?: string;
  public token$ = new Subject<string>();

  constructor(private http: HttpClient) { }
  getSession(){

  }

  setSession(){

  }

  signIn(signInCredential: SignInCredential): Observable<any>{

        // Trigger HttpClient
        return this.http.post(signInUrl, signInCredential, HTTP_FORM_OPTIONS)
            .pipe(tap(_ => console.log(``))
            , catchError(error => throwError(error)));
  }

}
