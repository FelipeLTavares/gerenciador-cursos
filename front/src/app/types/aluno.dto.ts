export default interface AlunoDto {
    id: number;
    nome: string;
    email: string;
}

export interface CreateAlunoDto {
    nome: string;
    email: string;
}