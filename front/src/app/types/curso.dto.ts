export default interface CursoDto {
    id: number;
    nome: string;
    descricao: string;
}

export interface CreateCursoDto {
    nome: string;
    descricao: string;
}