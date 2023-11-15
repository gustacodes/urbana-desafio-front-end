import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalRemoverComponent } from './modal-remover/modal-remover.component';
import { ModalCartoesComponent } from './modal-cartoes/modal-cartoes.component';

const routes: Routes = [
  {
    path: 'remover',
    component: ModalRemoverComponent,
  },

  {
    path: 'cartoes',
    component: ModalCartoesComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModalsRoutingModule { }