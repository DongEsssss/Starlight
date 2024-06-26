import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {catchError, map, Observable, Subject, tap, throwError} from 'rxjs';
import {SignInCredential, User} from 'src/app/models/user';
import {
  HTTP_FORM_OPTIONS, HTTP_GET_OPTIONS, HTTP_JSON_OPTIONS, SERVER_URL,
} from 'src/app/utils/shared.utils';


const signInUrl = '/user/login';
const signOutUrl = SERVER_URL + "/account/sign-in";
const changePasswordUrl = SERVER_URL + "/user/edit/pwd";


@Injectable({
  providedIn: 'root'
})
export class SessionService implements CanActivate {
  public token?: string;
  public token$ = new Subject<string>();
  isLogin: boolean = false;
  public auth?: string;
  public session?: User;

  constructor(private http: HttpClient) {
  }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  getSession() {

  }

  setSession() {

  }

  signIn(signInCredential: SignInCredential): Observable<any> {

    // Trigger HttpClient
    return this.http.post(signInUrl, signInCredential, HTTP_FORM_OPTIONS)
      .pipe(tap(_ => console.log(``))
        , catchError(error => throwError(error)));
  }

  clearSession() {
    this.session = undefined;
    this.auth = undefined;
    this.token = undefined;
    this.isLogin = false;
  }

  updatePassword(signInCredential: SignInCredential) {
    return this.http.post(changePasswordUrl, signInCredential, HTTP_JSON_OPTIONS)
      .pipe(tap(_ => console.log(``))
        , catchError(error => throwError(error)));
  }

}
