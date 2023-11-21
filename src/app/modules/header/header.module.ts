import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { CartoesModule } from '../cartoes/cartoes.module';



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    UsuariosModule,
    CartoesModule
  ]
})
export class HeaderModule { }
