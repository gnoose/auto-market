import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
      { path: 'sell-car', loadChildren: () => import('./beta/beta.module').then(m => m.BetaModule) },
      { path: 'buy-car', loadChildren: () => import('./beta/beta.module').then(m => m.BetaModule) },
      { path: 'market', loadChildren: () => import('./beta/beta.module').then(m => m.BetaModule) },
      { path: 'contact-us', loadChildren: () => import('./beta/beta.module').then(m => m.BetaModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
