import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-modal-remover',
  templateUrl: './modal-remover.component.html',
  styleUrls: ['./modal-remover.component.css']
})
export class ModalRemoverComponent {

  @Input() usuario?: Usuario
  @Output() removerUsuario = new EventEmitter<void>();

  // Método para confirmar a remoção
  confirmarRemocao() {
    this.removerUsuario.emit();
  }
}
