import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

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
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuariosRoutingModule { }