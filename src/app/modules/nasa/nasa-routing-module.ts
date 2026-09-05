import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNasaComponent } from './pages/list-nasa/list-nasa.component';
 

const routes: Routes = [
  {
    path: 'list-nasa',
    component: ListNasaComponent
  },
  {
    path: '**',
    redirectTo: 'list-nasa'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoutingModule { }
