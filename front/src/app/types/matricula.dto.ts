export interface CreateMatriculaDto {
    aluno: { id: number },
    curso: { id: number }
}

export default interface AlunoMatriculadoDto {
    id: number;
    nome: string;
    email: string;
    idMatricula: number;
}