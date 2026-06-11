import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message = error.status === 0 
        ? 'serveur injoignable' 
        : error.error?.message ?? 'une erreur est survenu';
      console.error(`[HTTP ${error.status}] ${message}`);
      return throwError(() => error);
    })
  );
};
