import { Component } from '@angular/core';
import { CursosService } from '../../../services/cursos.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-cursos',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-cursos.component.html',
})
export class CadastroCursosComponent {

  constructor(private cursosService: CursosService, private router: Router) {}
  curso = {
    nome: '',
    descricao: '',
  };
  mensagemErro: string = '';

  salvar() {
    alert('Aluno salvo com sucesso (mock)!');
  }

  irPaginaInicio() {
    this.router.navigate(['/']);
  }

  irPaginaCursos() {
    this.router.navigate(['/cursos']);
  }

  cadastrarCurso() {
    this.cursosService.cadastrar(this.curso).subscribe({
      next: () => this.irPaginaCursos(),
      error: () => this.mensagemErro = 'Errro ao cadastrar aluno!'
    })
  }
  
}
