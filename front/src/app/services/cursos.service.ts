import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from '../constants/contants';
import { CreateCursoDto } from '../types/curso.dto';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  buscar(): Observable<any> {
    return this.http.get(`${constants.BASE_URL}/cursos`);
  }

  cadastrar(novoCurso: CreateCursoDto) {
    return this.http.post(`${constants.BASE_URL}/cursos`, novoCurso);
  }

  excluir(id: number) {
    return this.http.delete(`${constants.BASE_URL}/cursos/${id}`);
  }

}
