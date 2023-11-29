import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.apiUrl;
  private token = ''

  constructor(private http: HttpClient, private route: Router) { }

  autenticacao(user: User): Observable<{ token: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ token: string }>(`${this.URL}/auth/login`, user, { headers }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem(this.token, response.token);
        }
      }),
      catchError(error => {
        console.error('Erro na autenticação:', error);
        throw error;
      })
    );
  }
  

  getAuthToken(): string | null {
    return localStorage.getItem(this.token);
  }

  isAuthenticated(): boolean {
    // Verifique se o token está presente e não está expirado
    const token = this.getAuthToken();
    return !!token;
  }

  // Adicione cabeçalho de autorização às solicitações HTTP
  addAuthorizationHeader(): HttpHeaders {
    const token = this.getAuthToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

}
