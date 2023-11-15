import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from '../../usuarios/usuarios.service';

@Component({
  selector: 'app-modal-remover',
  templateUrl: './modal-remover.component.html',
  styleUrls: ['./modal-remover.component.css']
})
export class ModalRemoverComponent {

  @Input() usuario?: Usuario
  @Output() removerUsuario = new EventEmitter<void>();
  users?: Usuario []

  constructor() {}

  confirmarRemocao() {
    this.removerUsuario.emit();
  }


}
