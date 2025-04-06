import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlunosService } from '../../../services/alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-alunos.component.html',
})
export class CadastroAlunosComponent {

  constructor(private alunosService: AlunosService, private router: Router) {}
  aluno = {
    nome: '',
    email: '',
  };
  mensagemErro: string = '';

  salvar() {
    alert('Aluno salvo com sucesso (mock)!');
  }

  irPaginaInicio() {
    this.router.navigate(['/']);
  }

  irPaginaAlunos() {
    this.router.navigate(['/alunos']);
  }

  cadastrarAluno() {
    this.alunosService.cadastrarAluno(this.aluno).subscribe({
      next: () => this.irPaginaAlunos(),
      error: () => this.mensagemErro = 'Errro ao cadastrar aluno!'
    })
  }
  
}
