import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  menssagemErro: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login({ usuario: this.usuario, senha: this.senha }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.menssagemErro = error?.error?.message || 'Falha no login. Verifique suas credenciais.';
      }
    });
  }

}
