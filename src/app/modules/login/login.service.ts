import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  autenticacao(user: User) {
    console.log(user);
    
      return this.http.post(`${this.URL}/auth/login`, user);
  }

  isLoggedIn(): boolean { 

      if(this.autenticacao != null) {
          return true
      }

      return false;
  }
}
