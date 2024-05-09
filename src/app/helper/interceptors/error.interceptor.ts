import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((err) => {
      
      let errorMessage ='';
      // error messages that do not require token such as login
      if (req.url.includes('auth')) {
        errorMessage= err.error.error;
      }
      // error status is different from 401 and skip refresh token
      if( err.status!==401) {
        errorMessage = err.error.error;
      }
      return throwError(()=>errorMessage)

      
    })
  );
};


