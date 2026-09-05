import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNeva } from './pages/list-neva/list-neva';

const routes: Routes = [
  { path: '', component: ListNeva }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NevaRoutingModule { }
