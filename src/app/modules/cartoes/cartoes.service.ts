import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartao } from 'src/app/interfaces/Cartao';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {

  private URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listarCartoes(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${this.URL}/cartoes`)
  }

}
