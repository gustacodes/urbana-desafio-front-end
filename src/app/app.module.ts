import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CommonModule } from '@angular/common';
import { ModalsModule } from './modules/modals/modals.module';
import { HeaderComponent } from './modules/header/header.component';
import { CartoesModule } from './modules/cartoes/cartoes.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    UsuariosModule,
    ModalsModule,
    CartoesModule,
    AppRoutingModule,
    CommonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }