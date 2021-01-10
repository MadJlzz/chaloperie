import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent],
  providers: [],
})
export class CoreComponentModule {
}
