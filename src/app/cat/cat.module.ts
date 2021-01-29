import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CatRoutingModule } from './cat-routing.module';
import { CatboardComponent } from './catboard/catboard.component';

@NgModule({
  imports: [
    CatRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    CatAddComponent,
    CatboardComponent,
    CatCardComponent
  ],
  exports: [
    CatboardComponent,
    CatCardComponent,
    CatAddComponent
  ],
  providers: [],
})
export class CatModule {
}
