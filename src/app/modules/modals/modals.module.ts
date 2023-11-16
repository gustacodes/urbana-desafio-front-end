import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalsRoutingModule } from './modals-routing.module';
import { ModalCartoesComponent } from './modal-cartoes-listar/modal-cartoes.component';
import { ModalRemoverUsuarioComponent } from './modal-remover-usuario/modal-remover.component';
import { ModalNovoCartaoComponent } from './modal-novo-cartao/modal-novo-cartao.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    ModalCartoesComponent,
    ModalRemoverUsuarioComponent,
    ModalNovoCartaoComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalsRoutingModule,
    ScrollingModule
  ],

  exports: [
    ModalCartoesComponent,
    ModalRemoverUsuarioComponent,
    ModalNovoCartaoComponent
  ]

})

export class ModalsModule { }