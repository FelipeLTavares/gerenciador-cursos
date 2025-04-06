import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos.service';
import { Router } from '@angular/router';
import { CursosService } from '../../../services/cursos.service';
import { TabelaGenericaComponent } from "../../../components/tabela-generica/tabela-generica.component";
import CursoDto from '../../../types/curso.dto';
import DadosTabelaGenerica from '../../../types/dadosTabelaGenerica.interface';

@Component({
  selector: 'app-listagem-cursos',
  imports: [TabelaGenericaComponent],
  templateUrl: './listagem-cursos.component.html',
})
export class ListagemCursosComponent {

  constructor(private cursosService: CursosService,
    private alunosService: AlunosService,
    private router: Router) { }

  cursos: any[] = [];
  alunos: any[] = [];
  cursoSelecionado: any = null;
  modalAberto: boolean = false;

  dadosTabela: DadosTabelaGenerica | null = null;

  ngOnInit() {
    this.buscarCursos();
    // this.buscarAlunos();
  }

  buscarCursos() {
    this.cursosService.buscar()
      .subscribe({
        next: (dados: CursoDto[]) => {
          this.cursos = dados;
          this.montarDadosTabela(dados);
        },
        error: (erro) => {
          console.log('Erro ao carregar cursos', erro);
        },
      })
  }

  irPaginaInicio() {
    this.router.navigate(['/']);
  }

  irPaginaCadastroCurso() {
    this.router.navigate(['/cursos/cadastro']);
  }

  irPaginaAlunosMatriculados(id: number) {
    this.router.navigate([`/cursos/${id}/alunos`]);
  }

  removerCurso(id: number) {
    this.cursosService.excluir(id)
      .subscribe({
        next: () => {
          this.buscarCursos();
        },
        error: () => console.log("Erro")
      })
  }

  //

  // abrirModal(curso: any) {
  //   this.cursoSelecionado = curso;
  //   this.modalAberto = true;
  // }

  // fecharModal() {
  //   this.modalAberto = false;
  //   this.cursoSelecionado = null;
  // }

  // buscarAlunos() {
  //   this.alunosService.buscarAlunos()
  //     .subscribe({
  //       next: (dados) => {
  //         this.alunos = dados
  //       },
  //       error: (erro) => {
  //         console.log('Erro ao carregar alunos', erro);
  //       },
  //     })
  // }

  montarDadosTabela(cursos: CursoDto[]) {
    this.dadosTabela = {
      colunas: ['ID', 'Nome'],
      chaves: ['id', 'nome'],
      dados: cursos,
      acoes: [
        { titulo: 'Matricular alunos', callback: (curso: CursoDto) => { console.log('asdasdasdasdasd'); this.irPaginaAlunosMatriculados(curso.id) } },
        { titulo: 'Cancelar', callback: (curso: CursoDto) => { this.removerCurso(curso.id) } },
      ]
    }
  }
}
