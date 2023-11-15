import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { ModalRemoverComponent } from '../modals/modal-remover/modal-remover.component';

const routes: Routes = [

  {
    path: 'cadastrar',
    component: UsuarioFormularioComponent,
  },

  {
    path: 'editar/:id',
    component: UsuarioEditarComponent,

  },

  {
    path: 'listar',
    component: UsuarioListaComponent,
  },

  {
    path: 'remover',
    component: ModalRemoverComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuariosRoutingModule { }