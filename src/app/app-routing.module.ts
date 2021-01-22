import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCatComponent } from './feature/add-cat/add-cat.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddCatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
