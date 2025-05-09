import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from '../constants/contants';
import { Observable } from 'rxjs';
import { CreateAlunoDto } from '../types/aluno.dto';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  buscarAlunos(): Observable<any> {
    return this.http.get(`${constants.BASE_URL}/alunos`)
  }

  cadastrarAluno(novoAluno: CreateAlunoDto) {
    return this.http.post(`${constants.BASE_URL}/alunos`, novoAluno);
  }

  excluirAluno(id: number) {
    return this.http.delete(`${constants.BASE_URL}/alunos/${id}`)
  }

  buscarAlunosNaoMatriculadosNoCurso(id: number) {
    return this.http.get(`${constants.BASE_URL}/alunos/alunos-nao-matriculados/${id}`)
  }
}
