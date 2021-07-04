import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {RegisterResponse} from './register-response' ;
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/register';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> { //login method
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  /*signUp(info: SignUpInfo): Observable<RegisterResponse> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }*/

  register(info: SignUpInfo): Observable<RegisterResponse> {      
    return this.http.post<RegisterResponse>(
      this.signupUrl, 
      info, 
      httpOptions
      ).pipe(
          retry(1),
          catchError(this.handleError)
      )          
  }

  
  handleError(error) {    
    let errorMessage = `Error Code: ${error.status} - ${error.error.error} \nMessage: ${error.error.message}`;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
