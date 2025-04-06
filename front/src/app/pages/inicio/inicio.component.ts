import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {

  constructor(private router: Router) {}

  irPaginaAlunos() {
    this.router.navigate(['/alunos']);
  }

  irPaginaCursos() {
    this.router.navigate(['/cursos']);
  }

}
