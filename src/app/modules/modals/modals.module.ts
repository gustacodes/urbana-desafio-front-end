import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalsRoutingModule } from './modals-routing.module';
import { ModalCartoesComponent } from './modal-cartoes/modal-cartoes.component';
import { ModalRemoverComponent } from './modal-remover/modal-remover.component';

@NgModule({
  declarations: [
    ModalCartoesComponent,
    ModalRemoverComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalsRoutingModule
  ],

  exports: [
    ModalCartoesComponent,
    ModalRemoverComponent
  ]

})

export class ModalsModule { }