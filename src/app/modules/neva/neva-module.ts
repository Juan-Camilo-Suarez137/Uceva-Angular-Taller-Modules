import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NevaRoutingModule } from './neva-routing-module';
import { TableNeva } from './components/table-neva/table-neva';
import { ListNeva } from './pages/list-neva/list-neva';


@NgModule({
  declarations: [
    TableNeva,
    ListNeva
  ],
  imports: [
    CommonModule,
    NevaRoutingModule
  ]
})
export class NevaModule { }
