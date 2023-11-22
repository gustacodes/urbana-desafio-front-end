import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-modal-remover',
  templateUrl: './modal-remover.component.html',
  styleUrls: ['./modal-remover.component.css']
})

export class ModalRemoverUsuarioComponent {

  @Input() usuario?: Usuario
  @Output() remover = new EventEmitter<void>();
  users?: Usuario []

  constructor() {}

  confirmarRemocao() {
    this.remover.emit();
  }

}
