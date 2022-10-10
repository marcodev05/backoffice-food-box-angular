import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.getToken()) {
       request = request.clone({
        setHeaders: {
          Authorization : 'Bearer ' + this.authService.getToken()
        }
      });
    }
    return next.handle(request); 
    // .pipe(
    //   catchError(
    //     error => {
    //       return throwError(error);
    //     }
    //   )
    // );
  }
}
