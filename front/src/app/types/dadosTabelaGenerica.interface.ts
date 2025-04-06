export default interface DadosTabelaGenerica {
    dados: any[];
    colunas: string[]
    chaves: string[]
    acoes: AcoesTabelaGenerica[]
}

export interface AcoesTabelaGenerica {
    titulo: string;
    callback: any;
}