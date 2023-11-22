import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'usuarios',
    loadChildren: () => import('./modules/usuarios/usuarios.module').then((u) => u.UsuariosModule),
  },

  {
    path: 'cartoes',
    loadChildren: () => import('./modules/cartoes/cartoes.module').then((c) => c.CartoesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }