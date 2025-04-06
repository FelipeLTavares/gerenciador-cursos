# Gerenciador de Cursos
Esse é projeto faz parte de um teste técnico que visa avaliar meus conhecimentos com Java e Typescript (com os frameworks Quarkus e Angular).

## Como rodar com Docker
 - Ter o GIT, o Docker e Docker-compose instalados;
 - Clonar o projeto;
 - Rodar o comando: ```docker-compose up --build```
 - Quando o processo terminar, acessar ```http://localhost:4200```
 - Usar as credenciais: Usuário: "usuario" e Senha: "senha" para logar
 - Pronto, o sistema está disponívle para uso!

## Funcionalidades
 - 1. Logar no sistema;
 - 2. Cadastrar, listar e excluir alunos;
 - 3. Cadastrar, listar e excluir cursos;
 - 4. Matricular alunos em cursos;
 - 5. Listar alunos matriculados por curso.

 ### 1. Logar
 Ao entrar no sistema usar as tentar logar com as credenciais: Usuário: "usuario" e Senha: "senha" para logar

 ### 2. Cadastrar, listar e excluir alunos
 - No início clicar no botão "Alunos" e irá aparecer uma lista de alunos;
 - Na lista de alunos, tem um botão de "Remover", e isso irá remover o aluno;
 - Em cima da tabela, tem um botão "Novo Aluno" isso redireciona para uma formulário onde permitirá criar um novo aluno.

 ### 3. Cadastrar, listar e excluir cursos
 - No início clicar no botão "Cursos" e irá aparecer uma lista de cursos;
 - Na lista de cursos, tem um botão de "Remover", e isso irá remover o curso;
 - Em cima da tabela, tem um botão "Novo Curso" isso redireciona para uma formulário onde permitirá criar um novo curso.

 ### 4. Matricular alunos em cursos
 - Na lista de cursos em cada curso tem um botão de "Matricular alunos", que redireciona para uma página que lista os alunos matriculados naquele curso e em cima da lista tem um botão que abre um formulário onde poderá cadastrar alunos no curso, podendo cadastrar apenas uma por vez.

 ### 5. Listar alunos matriculados por curso
 - Na lista de cursos ao clicar em "Matricular alunos", o usuário será redirecionado a lista de alunos matriculados naquele curso.

 ## Tecnologias usadas
 No frontend foi usado o framework Angular na versão 19.
 No backend Foi usado o framwork Quarkus com Java 21. Hibernate-orm-panache para lidar com o banco, Smallrye-jwt para lidar com autenticação e Hibernate-validator para lidar com validação de dados.
 Banco Postgres.
 Docker para containerizar a aplicação e seus serviços.

 ## Sobre o desenvolvimento
 - Escolhi o banco Postgres por ser o banco relacional que mais tenho afinidade;
 - Escolhi o Java em detrimento ao Kotlin por ter mais afinidade com o primeiro;
 - Os dados das autenticação foram mockados para facilitar o teste;
 - Para forçar o usuário a sempre estar com um token atualizado, foi implementado uma middleware que verifica se as requisições retornaram uma statusCode 401, sendo o caso, volta para a tela de login para se autenticar novamente;
 - Não ficou explícito, mas supus que um memso aluno não podia ser matriculado no mesmo curso maios de uma vez, então limitei os alunos que são mostrados no formulário de matrícula no curso;
 - As credenciais do banco também ficaram "mockadas" no docker-compose para facilitar o desenvolvimento;
 - Como não existiam informações muito sensívies no front, optei por deixar contantes gerais num arquivo de constantes;