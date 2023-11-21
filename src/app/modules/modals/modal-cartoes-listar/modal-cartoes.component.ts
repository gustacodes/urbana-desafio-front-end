import { Component, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ModalsService } from '../modals.service';
import { Cartao } from 'src/app/interfaces/Cartao';

@Component({
  selector: 'app-modal-cartoes',
  templateUrl: './modal-cartoes.component.html',
  styleUrls: ['./modal-cartoes.component.css']
})

export class ModalCartoesComponent {

  @Input() usuario?: Usuario;
  cartoes: Cartao [] = []

  constructor(private service: ModalsService) { }

  statusCartao(id?: number, idCartao?: number) {
    this.service.alterarStatusDoCartao(id, idCartao).subscribe((status) => {
      location.reload()
    })
  }

  removerCartao(id?: number, idCartao?: number) {
    this.service.removerCartao(id, idCartao).subscribe(() => {
      location.reload()
    })
  } 

}
