import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesComponent } from './cartoes.component';

const routes: Routes = [

  {
    path: 'lista',
    component: CartoesComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartoesRoutingModule { }