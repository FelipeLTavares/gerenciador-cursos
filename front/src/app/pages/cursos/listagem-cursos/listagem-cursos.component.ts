import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos.service';
import { Router } from '@angular/router';
import { CursosService } from '../../../services/cursos.service';
import { ModalAdicionarAlunosComponent } from "../../../components/modal-adicionar-alunos/modal-adicionar-alunos.component";
import { MatriculaService } from '../../../services/matricula.service';

@Component({
  selector: 'app-listagem-cursos',
  imports: [ModalAdicionarAlunosComponent],
  templateUrl: './listagem-cursos.component.html',
})
export class ListagemCursosComponent {

  constructor(private cursosService: CursosService,
    private alunosService: AlunosService,
    private matriculasService: MatriculaService,
    private router: Router) { }

  cursos: any[] = [];
  alunos: any[] = [];
  cursoSelecionado: any = null;
  modalAberto: boolean = false;

  ngOnInit() {
    this.buscarCursos();
    this.buscarAlunos();
  }

  buscarCursos() {
    this.cursosService.buscar()
      .subscribe({
        next: (dados) => {
          this.cursos = dados
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

  abrirModal(curso: any) {
    this.cursoSelecionado = curso;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.cursoSelecionado = null;
  }

  confirmarMatricula(idAluno: number) {

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
}
