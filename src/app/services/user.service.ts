import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginHistory} from '../auth/login-history';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private loginHistoryUrl = 'http://localhost:8080/api/auth/history';
  private signoutUrl = 'http://localhost:8080/api/auth/logout';

  constructor(private http: HttpClient) { }

   public getUserHistory(username: string): Observable<LoginHistory> {
    return this.http.get<LoginHistory>(this.loginHistoryUrl + "?username="+username , httpOptions);
  }

  public signoutUser(username: string)
  {
    console.log('before the call for username:' + username) ;
    return this.http.get<any>(this.signoutUrl + "?username="+username , httpOptions);
  }


}
