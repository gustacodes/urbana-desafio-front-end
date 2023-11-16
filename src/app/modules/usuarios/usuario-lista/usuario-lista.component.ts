import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})

export class UsuarioListaComponent {

  usuarios: Usuario [] = []
  usuarioSelecionado?: Usuario;

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {    
    this.listaUsuarios()
  }
  
  selecionarUsuario(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }
  
  removerUsuario() {
    this.usuarioService.removerUsuario(this.usuarioSelecionado?.id).subscribe(() => {
      location.reload();
    })
  }

  listaUsuarios() {
    this.usuarioService.listaUsuarios().subscribe(users => {
      this.usuarios = users;
    });
  }  

}
