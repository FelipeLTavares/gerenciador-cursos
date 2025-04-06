import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-alunos',
  templateUrl: './listagem-alunos.component.html',
  imports: [CommonModule],
})
export class ListagemAlunosComponent {

  constructor(private alunosService: AlunosService, private router: Router) {}

  alunos: any[] = [];

  ngOnInit() {
    this.buscarAlunos();
  }

  buscarAlunos() {
    this.alunosService.buscarAlunos()
    .subscribe({
      next: (dados) => {
        this.alunos = dados
      },
      error: (erro) => {
        console.log('Erro ao carregar alunos', erro);
      },
    })
  }

  irPaginaInicio() {
    this.router.navigate(['/']);
  }

  irPaginaCadastroAluno() {
    this.router.navigate(['/alunos/cadastro']);
  }

  removerAluno(id: number) {
    this.alunosService.excluirAluno(id)
    .subscribe({
      next: () => {
        this.buscarAlunos();
      },
      error: () => console.log("Erro")
    })
  }
  
}
