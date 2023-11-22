import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from 'src/app/interfaces/Cartao';
import { Usuario } from 'src/app/interfaces/Usuario';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ModalsService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  novoCartao(id?: number, cartao?: Cartao): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URL}/usuarios/${id}/cartoes`, cartao);
  }

  alterarStatusDoCartao(id?: number, idCartao?: number) {
    return this.http.patch(`${this.URL}/usuarios/${id}/cartoes/${idCartao}/status`, undefined);
  }

  removerCartao(id?:number, idCartao?: number) {
    return this.http.delete(`${this.URL}/usuarios/${id}/cartoes/${idCartao}`)
  }

  buscarCartoesPorIdUsuario(idUsuario?: number): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${this.URL}/usuarios/${idUsuario}/cartoes`);
  }

}
