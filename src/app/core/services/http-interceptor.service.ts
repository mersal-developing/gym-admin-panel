import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer MY_TOKEN'),
    });
    this.spinnerService.setLoading(true);

    return next.handle(modifiedReq).pipe(finalize(() => {
      this.spinnerService.setLoading(false);
    }));
  }
}
