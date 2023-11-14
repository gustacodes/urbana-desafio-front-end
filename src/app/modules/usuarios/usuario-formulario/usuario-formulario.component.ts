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

  constructor(private usuarioService: UsuariosService, private route: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  salvarUsuario() {

    this.usuarioService.salvarUsuario(this.formulario.value).subscribe((usuario) => {
      this.route.navigate(['usuarios/listar'])
    },

    (error) => {
      console.log(this.formulario.value);
      
      alert('Falha ao cadastrar usuario' + JSON.stringify(error));
    }

    )
  }



}
