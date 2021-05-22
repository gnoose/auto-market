import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconModule } from '../ui-kit/icon/icon.module';
import { UiKitModule } from '../ui-kit/ui-kit.module';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    UiKitModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
