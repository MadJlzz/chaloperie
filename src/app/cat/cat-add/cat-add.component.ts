import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatService } from '../../core-providers/cat.service';
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

  private savingInProgress = false;

  constructor(private readonly formBuilder: FormBuilder, private readonly catService: CatService,
              private readonly snackBar: MatSnackBar, private readonly dialog: MatDialog) {
    this.form = this.formBuilder.group({
      titleControl: this.titleControl,
      descriptionControl: this.descriptionControl,
      imageControl: this.imageControl,
    });
  }

  get isSavingNewCat(): boolean {
    return this.savingInProgress;
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
    this.savingInProgress = true;
    this.catService.create(
      {
        title: this.titleControl.value,
        description: this.descriptionControl.value,
        pictureURL: this.imageControl.value
      }
    ).subscribe(
      value => {
        this.savingInProgress = false;
        this.form.reset();
        this.snackBar.open('You\'re 🐱 has been saved!', 'Maw', {duration: 2000});
      },
      error => {
        this.savingInProgress = false;
        this.snackBar.open(error, 'Ok', {duration: 2000})
      }
    );
  }
}
