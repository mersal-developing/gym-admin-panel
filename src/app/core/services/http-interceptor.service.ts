import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { UtilitiesService } from './utilities.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private utilitiesService: UtilitiesService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer MY_TOKEN'),
    });
    this.utilitiesService.setLoading(true);

    return next.handle(modifiedReq).pipe(
      catchError((error: any) => {
          this.utilitiesService.openSnackBar(`Error ${error.error.msg ? error.error.msg : error.error}`, 'close', 'error-alert');

        return throwError(() => error);
      }),
      finalize(() => {
        this.utilitiesService.setLoading(false);
      })
    );
  }
}
