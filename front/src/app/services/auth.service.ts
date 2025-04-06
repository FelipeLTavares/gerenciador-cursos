import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { constants } from '../constants/contants';
import { UsuarioDto } from '../types/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, 
    @Inject(PLATFORM_ID) private platformId: object, 
    private router: Router) {
    }

  login(credentials: UsuarioDto): Observable<any> {
    console.log('chegou aqui')
    return this.http.post( `${constants.BASE_URL}/auth/login`, credentials, {headers: new HttpHeaders({})});
  }
  
  logout() {
    this.removeItem('token');
    this.router.navigate(['/login']);
  }

  private getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private removeItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.getItem('token') !== null;
  }
}
