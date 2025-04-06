import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos.service';
import { MatriculaService } from '../../../services/matricula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAdicionarAlunosComponent } from '../../../components/modal-adicionar-alunos/modal-adicionar-alunos.component';
import { TabelaGenericaComponent } from "../../../components/tabela-generica/tabela-generica.component";
import DadosTabelaGenerica from '../../../types/dadosTabelaGenerica.interface';
import AlunoMatriculadoDto from '../../../types/matricula.dto';

@Component({
  selector: 'app-alunos-matriculados',
  imports: [ModalAdicionarAlunosComponent, TabelaGenericaComponent],
  templateUrl: './alunos-matriculados.component.html',
})
export class AlunosMatriculadosComponent {

  constructor(
    private alunosService: AlunosService,
    private matriculasService: MatriculaService,
    private router: Router,
    private route: ActivatedRoute) { }

  alunosNaoMatriculados: any[] = [];
  alunosMatriculados: any[] = [];
  modalAberto: boolean = false;
  curso: any = null;
  dadosTabela: DadosTabelaGenerica | null = null;

  ngOnInit() {
    this.curso = {
      id: Number(this.route.snapshot.paramMap.get('id'))
    };
    this.buscarMatriculas();
    this.buscarAlunosNaoMatriculados(Number(this.route.snapshot.paramMap.get('id')));
  }

  irPaginaCursos() {
    this.router.navigate(['/cursos']);
  }

  abrirModal() {
    if (this.curso.id) {
      this.modalAberto = true;
      this.buscarAlunosNaoMatriculados(Number(this.curso.id));
    }
  }

  fecharModal() {
    this.modalAberto = false;
  }

  confirmarMatricula(idAluno: number) {
    this.matriculasService.matricular({
      aluno: {id: idAluno},
      curso: {id: this.curso.id}
    })
    .subscribe({
      next: (res) => {
        this.fecharModal()
        this.buscarMatriculas()
        this.buscarAlunosNaoMatriculados(this.curso.id)
      },
      error: (err) => console.log(err)
    })
  }

  cancelarMatricula(id: number) {
    this.matriculasService.apagar(id)
    .subscribe(res => {
      this.buscarMatriculas();
    })
  }

  buscarAlunosNaoMatriculados(id: number) {
    this.alunosService.buscarAlunosNaoMatriculadosNoCurso(id)
      .subscribe({
        next: (dados: any) => {
          this.alunosNaoMatriculados = dados
        },
        error: (erro) => {
          console.log('Erro ao carregar alunos', erro);
        },
      })
  }

  buscarMatriculas() {
    this.matriculasService.buscar(this.curso.id)
    .subscribe({
      next: (dados) => {
        this.alunosMatriculados = dados;
        this.montarDadosTabela(dados);
      },
      error: (erro) => {
        console.log('Erro ao carregar alunos', erro);
      },
    })
  }

    montarDadosTabela(alunos: AlunoMatriculadoDto[]) {
      this.dadosTabela = {
        colunas: ['ID', 'Nome'],
        chaves: ['id', 'nome'],
        dados: alunos,
        acoes: [
          { titulo: 'Cancelar', callback: (curso: AlunoMatriculadoDto) => this.cancelarMatricula(curso.idMatricula)  },
        ]
      }
    }

}
