import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

export interface DialogData {
  inputFile: string;
}

@Component({
  selector: 'chp-dialog-cropper',
  templateUrl: './dialog-cropper.component.html',
  styleUrls: ['./dialog-cropper.component.scss']
})
export class DialogCropperComponent {

  croppedImage: string;
  errorMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private readonly dialogRef: MatDialogRef<DialogCropperComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  loadImageFailed(): void {
    this.errorMessage = 'Oops, it seems we weren\'t able to load your kitty cat 😥';
  }

}
