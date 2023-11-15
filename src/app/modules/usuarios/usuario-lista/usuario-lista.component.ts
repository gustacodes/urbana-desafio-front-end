import { Component, numberAttribute } from '@angular/core';
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

  constructor(private usuarioService: UsuariosService, private router: Router) {}

  ngOnInit() {    
    this.listaUsuarios()
  }

  // Método para selecionar o usuário antes de remover
  selecionarUsuario(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }
  
  // Método para remover o usuário (pode ser acionado pelo modal)
  removerUsuario() {
    this.usuarioService.removerUsuario(this.usuarioSelecionado?.id).subscribe(() => {
      this.router.navigate(['/usuarios/listar'])
    })
  }

  listaUsuarios() {
    this.usuarioService.listaUsuarios().subscribe(users => {
      this.usuarios = users;
    });
  }  

}
