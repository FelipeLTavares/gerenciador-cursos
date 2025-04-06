import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
})
export class InicioComponent {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.check().subscribe(() => {})
  }

  irPaginaAlunos() {
    this.router.navigate(['/alunos']);
  }

  irPaginaCursos() {
    this.router.navigate(['/cursos']);
  }

}
