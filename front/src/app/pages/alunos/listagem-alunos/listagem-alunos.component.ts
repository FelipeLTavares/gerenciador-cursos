import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos.service';
import { Router } from '@angular/router';
import DadosTabelaGenerica from '../../../types/dadosTabelaGenerica.interface';
import AlunoDto from '../../../types/aluno.dto';
import { TabelaGenericaComponent } from "../../../components/tabela-generica/tabela-generica.component";

@Component({
  selector: 'app-listagem-alunos',
  templateUrl: './listagem-alunos.component.html',
  imports: [CommonModule, TabelaGenericaComponent],
})
export class ListagemAlunosComponent {

  constructor(private alunosService: AlunosService, private router: Router) { }

  dadosTabela: DadosTabelaGenerica | null = null;

  ngOnInit() {
    this.buscarAlunos();
  }

  buscarAlunos() {
    this.alunosService.buscarAlunos()
      .subscribe({
        next: (dados) => {
          this.montarDadosTabela(dados);
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

  montarDadosTabela(alunos: AlunoDto[]) {
    this.dadosTabela = {
      colunas: ['ID', 'Nome', 'E-mail'],
      chaves: ['id', 'nome', 'email'],
      dados: alunos,
      acoes: [
        { titulo: 'Remover', callback: (aluno: AlunoDto) => this.removerAluno(aluno.id) },
      ]
    }
  }

}
