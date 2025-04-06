import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constants/contants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) {
  }

  matricular(matricula: any): Observable<any> {
    return this.http.post(`${constants.BASE_URL}/matriculas`, matricula)
  }

  buscar(idCurso: number): Observable<any> {
    return this.http.get(`${constants.BASE_URL}/matriculas/curso/${idCurso}`)
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(`${constants.BASE_URL}/matriculas/${id}`)
  }
}
