import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartoesRoutingModule } from './cartoes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CartoesComponent } from './cartoes.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ModalsModule } from '../modals/modals.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [CartoesComponent],

  imports: [
    CommonModule,
    HttpClientModule,
    CartoesRoutingModule,
    UsuariosModule,
    ModalsModule
  ],

  exports: [
    CartoesComponent,
  ]
  
})
export class CartoesModule { }
