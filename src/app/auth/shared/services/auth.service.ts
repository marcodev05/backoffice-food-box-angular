import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LoginRequest } from '../models/LoginRequest';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/LoginResponse';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = environment.apiBaseUrl;
  private loggedUser: User | null = new User();
  constructor(private http: HttpClient) { }


  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.apiBaseUrl + "/login", loginRequest)
      .pipe(
        map((responseLogin: any) => {
          localStorage.setItem('currentUser', JSON.stringify(responseLogin));
          localStorage.setItem('user-token', responseLogin.token);
          return responseLogin;
        },
          catchError(error => {
            alert(error.error.message);
            return error;
          })
        )
      )
  }


  public getCurrentUser(): User | null {
    return this.loggedUser;
  }


  public getToken(): String | null {
    return localStorage.getItem('user-token');
  }

  public isLoggedIn(): boolean{
     return this.getToken() ? true : false;
  }


  public logout(): void {
    this.loggedUser = null;
    localStorage.removeItem('user-token');
    localStorage.removeItem('currentUser');
  }

}