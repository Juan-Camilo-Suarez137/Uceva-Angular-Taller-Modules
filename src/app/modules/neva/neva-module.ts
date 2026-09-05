import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NevaRoutingModule } from './neva-routing-module';
import { TableNeva } from './components/table-neva/table-neva';


@NgModule({
  declarations: [
    TableNeva
  ],
  imports: [
    CommonModule,
    NevaRoutingModule
  ]
})
export class NevaModule { }
