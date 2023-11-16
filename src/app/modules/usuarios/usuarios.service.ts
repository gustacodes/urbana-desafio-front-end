import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from 'src/app/interfaces/Cartao';
import { Usuario } from 'src/app/interfaces/Usuario';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  listaUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.URL}/usuarios`);
  }

  salvarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.URL}/usuarios`, usuario);
  }

  removerUsuario(id?:number) {
    return this.http.delete<Usuario>(`${this.URL}/usuarios/remove/${id}`)
  }

  atualizarUsuario(id?: number, usuario?: Usuario) {
    return this.http.put<Usuario>(`${this.URL}/usuarios/${id}`, usuario)
  }

}
