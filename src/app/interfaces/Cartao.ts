// Certifique-se de que a importação está correta
import { TipoCartao } from '../enums/TipoCartao';

export class Cartao {
    numero_cartao!: number
    nome!: string
    status!: boolean 
    tipoCartao?: TipoCartao
}