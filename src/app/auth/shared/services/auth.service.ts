import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LoginRequest } from '../models/LoginRequest';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getToken(): String | null {
    return localStorage.getItem('currentUser');
  }


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

}