import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalsModule } from '../modals/modals.module';


@NgModule({
  declarations: [
    UsuarioEditarComponent,
    UsuarioListaComponent,
    UsuarioFormularioComponent,
  ],

  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalsModule
  ]
  
})

export class UsuariosModule { }