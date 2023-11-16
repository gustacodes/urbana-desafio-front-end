import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ModalsService } from '../modals.service';

@Component({
  selector: 'app-modal-cartoes',
  templateUrl: './modal-cartoes.component.html',
  styleUrls: ['./modal-cartoes.component.css']
})

export class ModalCartoesComponent {

  @Input() usuario?: Usuario;

  constructor(private service: ModalsService) { }

  statusCartao(id?: number, numero?: number) {
    this.service.desativarCartao(id, numero).subscribe((status) => {
      location.reload()
    })
  }

  removerCartao(id?: number) {
    this.service.removerCartao(id).subscribe(() => {
      location.reload()
    })
  } 

}
