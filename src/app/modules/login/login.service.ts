import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.apiUrl;

  constructor(private http: HttpClient, private route: Router) { }

  autenticacao(user: User): Observable<{token: string}> {    
      return this.http.post<{token: string}>(`${this.URL}/auth/login`, user);
  }

  isLoggedIn(): boolean { 

      if(this.autenticacao != null) {            
          return true
      }

      return false;
  }
}
