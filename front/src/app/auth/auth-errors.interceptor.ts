import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NgZone } from '@angular/core';

export const authErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const ngZone = inject(NgZone);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        ngZone.run(() => {
          router.navigate(['/login']);
        });
      }

      return throwError(() => error);
    })
  );
};