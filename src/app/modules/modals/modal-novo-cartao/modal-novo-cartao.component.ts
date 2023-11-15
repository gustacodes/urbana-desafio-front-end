import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../modals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-novo-cartao',
  templateUrl: './modal-novo-cartao.component.html',
  styleUrls: ['./modal-novo-cartao.component.css']
})
export class ModalNovoCartaoComponent {

  @Input() idUsuario?: number
  formulario!: FormGroup;

  constructor(private modalsService: ModalsService, private router: Router, private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      nome: ['', [Validators.required]],
      tipoCartao: ['', [Validators.required]]
    });
  }

  salvarCartao() {
    this.modalsService.novoCartao(this.idUsuario, this.formulario?.value).subscribe((cartao) => {
      
    },

    (error) => {      
      alert('Falha ao adicionar cartão' + JSON.stringify(error));
    }
    )
  }

}
