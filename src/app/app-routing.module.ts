import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'usuarios',
    loadChildren: () => import('./modules/usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },

  {
    path: 'cartoes',
    loadChildren: () => import('./modules/modals/modals.module').then((m) => m.ModalsModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }