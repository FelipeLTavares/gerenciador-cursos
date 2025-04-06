package org.unifor.dtos;


import org.unifor.entities.Aluno;

public class AlunoMatriculadoDto {
    public Long id;
    public String nome;
    public String email;
    public Long idMatricula;

    public AlunoMatriculadoDto(Aluno aluno, Long idMatricula) {
        this.id = aluno.id;
        this.nome = aluno.nome;
        this.email = aluno.email;
        this.idMatricula = idMatricula;
    }

}
