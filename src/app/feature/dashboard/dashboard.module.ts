import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreComponentModule } from '../../core/components/components.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CoreComponentModule,
    LayoutModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [],
})
export class DashboardModule {
}
