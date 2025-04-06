import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListagemAlunosComponent } from './pages/alunos/listagem-alunos/listagem-alunos.component';
import { ListagemCursosComponent } from './pages/cursos/listagem-cursos/listagem-cursos.component';
import { CadastroAlunosComponent } from './pages/alunos/cadastro-alunos/cadastro-alunos.component';
import { CadastroCursosComponent } from './pages/cursos/cadastro-cursos/cadastro-cursos.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AlunosMatriculadosComponent } from './pages/cursos/alunos-matriculados/alunos-matriculados.component';

export const routes: Routes = [
    {
        title: 'Login',
        path: 'login',
        component: LoginComponent
    },

    {
        path: '',
        canActivate: [authGuard],
        children: [
            {
                title: 'Início',
                path: '',
                component: InicioComponent,
                
            },

            {
                path: 'alunos',
                children: [
                    {
                        title: 'Alunos',
                        path: '',
                        component: ListagemAlunosComponent,
                    },
                    {
                        title: 'Alunos | Cadastro',
                        path: 'cadastro',
                        component: CadastroAlunosComponent,
                    }
                ]
            },

            {
                path: 'cursos',
                children: [
                    {
                        title: 'Cursos',
                        path: '',
                        component: ListagemCursosComponent,
                    },
                    {
                        title: 'Cursos | Cadastro',
                        path: 'cadastro',
                        component: CadastroCursosComponent,
                    },
                    {
                        title: 'Cursos | Alunos Matriculados',
                        path: ':id/alunos',
                        component: AlunosMatriculadosComponent,
                    },
                ]
            },
        ]

    },
];
