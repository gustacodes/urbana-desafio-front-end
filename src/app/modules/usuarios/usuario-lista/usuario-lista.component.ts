import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent {

  usuarios: Usuario [] = []

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit() {    
    this.listaUsuarios()
  }

  listaUsuarios() {
    this.usuarioService.listaUsuarios().subscribe(users => {
      this.usuarios = users;
      console.log(this.usuarios);
    });
  }
  

}
