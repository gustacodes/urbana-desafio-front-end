import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalCartoesComponent } from './modal-cartoes-listar/modal-cartoes.component';
import { ModalRemoverUsuarioComponent } from './modal-remover-usuario/modal-remover.component';
import { ModalNovoCartaoComponent } from './modal-novo-cartao/modal-novo-cartao.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  {
    path: 'remover',
    component: ModalRemoverUsuarioComponent, canActivate: [AuthGuard]
  },

  {
    path: 'cartoes',
    component: ModalCartoesComponent, canActivate: [AuthGuard]
  },

  {
    path: 'cartao',
    component: ModalNovoCartaoComponent, canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModalsRoutingModule { }