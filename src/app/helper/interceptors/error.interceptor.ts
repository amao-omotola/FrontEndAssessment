import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((err) => {
      console.log(err);
      
      let errorMessage ='';
      // error messages that do not require token such as login
      if (req.url.includes('auth')) {
        console.log(err);
        errorMessage= err.message;
      }
      // error status is different from 401 and skip refresh token
      if( err.status!==401) {
        errorMessage = err.message;
      }
      return throwError(()=>errorMessage)

      
    })
  );
};
// };


