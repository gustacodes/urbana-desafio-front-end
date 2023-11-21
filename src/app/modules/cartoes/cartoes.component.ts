import { Component } from '@angular/core';
import { CartoesService } from './cartoes.service';
import { Cartao } from 'src/app/interfaces/Cartao';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent {

  cartoes: Cartao [] = []

  constructor(private service: CartoesService) {}

  ngOnInit() {
    this.listarCartoes();
  }

  listarCartoes() {
    return this.service.listarCartoes().subscribe((cartao) => {
      this.cartoes = cartao;
    })
  }

}
