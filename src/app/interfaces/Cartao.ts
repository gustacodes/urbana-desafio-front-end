// Certifique-se de que a importação está correta
import { TipoCartao } from '../enums/TipoCartao';

export class Cartao {
    numeroCartao!: number
    nome!: string
    status!: boolean 
    tipoCartao?: TipoCartao
}