import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';
import { AppMaterialModule } from '../../app-masterial.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    CommonModule,
    AppMaterialModule

  ]
})
export class DashboardModule {}