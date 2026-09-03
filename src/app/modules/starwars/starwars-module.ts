import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing-module';
import { TableStarwars } from './components/table-starwars/table-starwars';
import { ListStarwars } from './pages/list-starwars/list-starwars';


@NgModule({
  declarations: [
    TableStarwars,
    ListStarwars
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
