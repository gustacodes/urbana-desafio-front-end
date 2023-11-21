import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {

  @Input() usuario?: Usuario
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UsuariosService) {
    
    this.form = formBuilder.group({

      nome: new FormControl(),
      email: new FormControl(),
      senha: new FormControl(),

    })

  }

  ngOnInit() { }

  atualizarUsuario(id?: number) {

    this.service.atualizarUsuario(id, this.form.value).subscribe(() => {
      location.reload()
    },

      (error) => {
        alert('Falha ao atualizar' + JSON.stringify(error))
      }

    )
  }

}
