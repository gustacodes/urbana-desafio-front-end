import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {

  @Input() usuario?: Usuario
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UsuariosService) {

    //Falta arrumar para que os campos que estiverem em branco, setar os dados já existentes e alterar apenas os campos inseridos
    this.form = formBuilder.group({

      nome: new FormControl('', [Validators.required]
      ),
      email: new FormControl('', [Validators.required]
      ),
      senha: new FormControl('', [Validators.required]
      ),

    })

  }

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
