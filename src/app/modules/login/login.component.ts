import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form!: FormGroup;

  constructor(private service: LoginService, private builder: FormBuilder) {
    this.form = this.builder.group({
    login: ['', [Validators.required]],
    senha: ['', [Validators.required]]
    })
  }

  logar() {
    this.service.autenticacao(this.form.value).subscribe()
  }

}
