import { Component } from '@angular/core';
import { AlunosService } from '../../../services/alunos.service';
import { MatriculaService } from '../../../services/matricula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAdicionarAlunosComponent } from '../../../components/modal-adicionar-alunos/modal-adicionar-alunos.component';

@Component({
  selector: 'app-alunos-matriculados',
  imports: [ModalAdicionarAlunosComponent],
  templateUrl: './alunos-matriculados.component.html',
})
export class AlunosMatriculadosComponent {

  constructor(
    private alunosService: AlunosService,
    private matriculasService: MatriculaService,
    private router: Router,
    private route: ActivatedRoute) { }

  alunos: any[] = [];
  alunosMatriculados: any[] = [];
  modalAberto: boolean = false;
  curso: any = null;

  ngOnInit() {
    this.buscarAlunos();
    this.curso = {
      id: Number(this.route.snapshot.paramMap.get('id'))
    };
    this.buscarMatriculas();
  }

  irPaginaCursos() {
    this.router.navigate(['/cursos']);
  }

  abrirModal() {
    if (this.curso.id) {
      this.modalAberto = true;
    }
  }

  fecharModal() {
    this.modalAberto = false;
  }

  confirmarMatricula(idAluno: number) {
    console.log("asdasd", idAluno, this.curso.id)

    this.matriculasService.matricular({
      aluno: {id: idAluno},
      curso: {id: this.curso.id}
    })
    .subscribe({
      next: (res) => {
        this.fecharModal()
        this.buscarMatriculas()
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

  buscarMatriculas() {
    this.matriculasService.buscar(this.curso.id)
    .subscribe({
      next: (dados) => {
        this.alunosMatriculados = dados
      },
      error: (erro) => {
        console.log('Erro ao carregar alunos', erro);
      },
    })
  }

}
