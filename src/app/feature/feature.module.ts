import { NgModule } from '@angular/core';
import { AddCatComponent } from './add-cat/add-cat.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [],
  declarations: [
    AddCatComponent,
    DashboardComponent
  ],
  exports: [
    AddCatComponent,
    DashboardComponent
  ],
  providers: [],
})
export class FeatureModule {
}
