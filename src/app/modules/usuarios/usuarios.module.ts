import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalRemoverComponent } from '../modals/modal-remover/modal-remover.component';
import { ModalCartoesComponent } from '../modals/modal-cartoes/modal-cartoes.component';


@NgModule({
  declarations: [
    UsuarioEditarComponent,
    UsuarioListaComponent,
    UsuarioFormularioComponent,
    ModalRemoverComponent,
    ModalCartoesComponent
  ],

  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
  
})

export class UsuariosModule { }