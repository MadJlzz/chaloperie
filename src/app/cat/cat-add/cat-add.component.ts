import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogCropperComponent } from '../../core/dialog-cropper/dialog-cropper.component';

@Component({
  selector: 'chp-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.scss']
})
export class CatAddComponent {

  /**
   * Reference to the image's input.
   */
  @ViewChild('fileInput')
  fileInput: any;

  /**
   * Name of the selected image.
   */
  selectedFileName: string;

  /**
   * Form related attributes to save a cat.
   */
  form: FormGroup;

  /**
   * Title of a cat post.
   */
  titleControl = new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]);

  /**
   * Description of the cat's trickery.
   */
  descriptionControl = new FormControl('');

  /**
   * Image data of a cat.
   */
  imageControl = new FormControl('', Validators.required);

  constructor(private readonly formBuilder: FormBuilder, private readonly dialog: MatDialog) {
    this.form = this.formBuilder.group({
      titleControl: this.titleControl,
      descriptionControl: this.descriptionControl,
      imageControl: this.imageControl,
    });
  }

  onFileChange($event: any): void {
    this.selectedFileName = $event.target.files.item(0).name;

    const dialogRef = this.dialog.open(DialogCropperComponent, {
      data: {inputFile: $event.target.files[0]}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.selectedFileName = '';
      }
      this.fileInput.nativeElement.value = '';
      this.imageControl.setValue(result);
    });
  }

  onSubmit(): void {
    console.error('NotImplementedError: CALL THE BACKEND THERE.');
  }

}
