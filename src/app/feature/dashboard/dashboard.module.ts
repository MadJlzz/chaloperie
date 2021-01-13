import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { CoreComponentModule } from '../../core/components/components.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
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
