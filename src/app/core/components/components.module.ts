import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CatComponent } from './cat/cat.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CatComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, CatComponent, FooterComponent],
  providers: [],
})
export class CoreComponentModule {
}
