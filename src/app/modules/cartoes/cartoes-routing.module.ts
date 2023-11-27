import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartoesComponent } from './cartoes.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: '',
    component: CartoesComponent, canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CartoesRoutingModule { }