import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStarwars } from './pages/list-starwars/list-starwars';

const routes: Routes = [
  { path: '', component: ListStarwars }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }