import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  const rotasSemToken = ['/auth/login', '/auth/register'];

  const deveIgnorar = rotasSemToken.some((rota) => req.url.includes(rota));

  if (token && !deveIgnorar) {
    const reqClonada = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(reqClonada);
  }

  return next(req);
};