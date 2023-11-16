import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartao } from 'src/app/interfaces/Cartao';
import { Usuario } from 'src/app/interfaces/Usuario';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ModalsService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }


  novoCartao(id?: number, cartao?: Cartao) {
    return this.http.put<Usuario>(`${this.URL}/usuarios/novo/${id}`, cartao);
  }

  desativarCartao(id?: number, numero?: number) {
    return this.http.put(`${this.URL}/usuarios/${id}/status/${numero}`, undefined);
  }

  removerCartao(id?:number) {
    return this.http.delete(`${this.URL}/usuarios/remover-cartao/${id}`)
  }

}
