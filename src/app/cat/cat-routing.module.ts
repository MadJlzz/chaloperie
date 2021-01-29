import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatboardComponent } from './catboard/catboard.component';

const APP_ROUTES: Routes = [
  {path: '', component: CatboardComponent},
  {path: 'add', component: CatAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule],
})
export class CatRoutingModule {
}
