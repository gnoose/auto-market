import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetaRoutingModule } from './beta-routing.module';
import { BetaComponent } from './beta.component';


@NgModule({
  declarations: [
    BetaComponent
  ],
  imports: [
    CommonModule,
    BetaRoutingModule
  ]
})
export class BetaModule { }
