import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { CatComponent } from './cat/cat.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    CatComponent
  ],
  declarations: [HeaderComponent, CatComponent],
  providers: [],
})
export class CoreComponentModule {
}
