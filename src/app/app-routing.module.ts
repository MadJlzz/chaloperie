import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'catboard'},
  {path: 'catboard', loadChildren: () => import('./cat/cat.module').then(m => m.CatModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
