import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsuarioEditarComponent,
    UsuarioListaComponent,
    UsuarioFormularioComponent
  ],

  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule
    
  ]
  
})

export class UsuariosModule { }