import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
