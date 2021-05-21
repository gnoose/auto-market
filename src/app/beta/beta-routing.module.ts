import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BetaComponent } from './beta.component';

const routes: Routes = [
  {
    path: '', component: BetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetaRoutingModule { }
