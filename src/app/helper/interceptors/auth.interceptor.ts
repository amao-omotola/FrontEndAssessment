import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../../environment/environment';
import { RegisterService } from '../../services/auth/register.service';
import { TokenService } from '../../services/auth/token.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  

  let token:any = inject(TokenService);
    
    let isLoggedIn = token.getToken();
    const isApiUrl = req.url.startsWith(environment.apiBaseUrl);
    if (isLoggedIn && isApiUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token.getToken()
        }
      })
      
    }
  return next(req);
};

