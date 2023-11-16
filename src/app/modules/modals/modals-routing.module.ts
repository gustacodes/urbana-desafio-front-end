import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalCartoesComponent } from './modal-cartoes-listar/modal-cartoes.component';
import { ModalRemoverUsuarioComponent } from './modal-remover-usuario/modal-remover.component';
import { ModalNovoCartaoComponent } from './modal-novo-cartao/modal-novo-cartao.component';

const routes: Routes = [
  {
    path: 'remover',
    component: ModalRemoverUsuarioComponent,
  },

  {
    path: 'cartoes',
    component: ModalCartoesComponent,
  },

  {
    path: 'cartao',
    component: ModalNovoCartaoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModalsRoutingModule { }