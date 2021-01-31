import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DialogCropperComponent } from './dialog-cropper/dialog-cropper.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    RouterModule
  ],
  declarations: [
    DialogCropperComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    DialogCropperComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule {
}
