import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule
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
