import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CommonModule } from '@angular/common';
import { ModalsModule } from './modules/modals/modals.module';



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    UsuariosModule,
    ModalsModule,
    AppRoutingModule,
    CommonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }