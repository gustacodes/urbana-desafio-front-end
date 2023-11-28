import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { AuthGuard } from 'src/app/auth.guard';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'cadastrar',
    component: UsuarioFormularioComponent, canActivate: [AuthGuard]
  },

  {
    path: 'editar',
    component: UsuarioEditarComponent, canActivate: [AuthGuard]

  },

  {
    path: 'lista',
    component: UsuarioListaComponent,  canActivate: [AuthGuard]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuariosRoutingModule { }