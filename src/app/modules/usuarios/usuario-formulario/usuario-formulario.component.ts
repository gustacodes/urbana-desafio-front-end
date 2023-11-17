import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.css']
})
export class UsuarioFormularioComponent {

  formulario!: FormGroup;
  cadastrado: boolean = false

  constructor(private usuarioService: UsuariosService, private route: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  get nome() {
    return this.formulario.get('nome')!;
  }

  get email() {
    return this.formulario.get('email')!;
  }

  get senha() {
    return this.formulario.get('senha')!;
  }

  salvarUsuario() {

    if (this.formulario.invalid) {
      return;
    }

    this.usuarioService.salvarUsuario(this.formulario.value).subscribe(() => {

      this.cadastrado = true;
      setTimeout(() => {
        location.reload()
      }, 2000);
    },

      (error) => {
        alert('Falha ao cadastrar usuario' + JSON.stringify(error));
      }

    )
  }

}
