import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private registerdUsersUrl = 'http://localhost:8080/api/auth/registered/';
  private loggedInUsersUrl = 'http://localhost:8080/api/auth/logged/';
  

  constructor(private http: HttpClient) { }

  /*getRegisteredUsers(): Observable<UserInfo[]> {
    return this.http.get(this.registerdUsersUrl);
  }*/

    getRegisteredUsers()
    {  
        return this.http.get<string[]>(this.registerdUsersUrl, httpOptions) ;
    }
    getLoggedInUsers()
    {  
      return this.http.get<string[]>(this.loggedInUsersUrl, httpOptions) ;
    }
}
