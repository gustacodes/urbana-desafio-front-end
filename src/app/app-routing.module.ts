import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((l) => l.LoginModule),
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: 'usuarios',
    loadChildren: () => import('./modules/usuarios/usuarios.module').then((u) => u.UsuariosModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'cartoes',
    loadChildren: () => import('./modules/cartoes/cartoes.module').then((c) => c.CartoesModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }