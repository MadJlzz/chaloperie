import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'chp-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.scss']
})
export class CatAddComponent implements OnInit, AfterViewInit {

  @ViewChild('previewImg')
  imgRef: ElementRef;

  form: FormGroup;
  titleControl = new FormControl('title');
  descriptionControl = new FormControl('description');

  private readonly imageData: ArrayBuffer;
  private readonly imageObjectUrl: string;

  constructor(private readonly router: Router, private readonly formBuilder: FormBuilder) {
    this.imageData = this.router.getCurrentNavigation().extras.state?.imageData;
    this.imageObjectUrl = URL.createObjectURL(new Blob([this.imageData]));

    this.form = this.formBuilder.group({
      title: this.titleControl,
      description: this.descriptionControl
    });
  }

  ngOnInit(): void {
    if (this.imageData == null) {
      this.router.navigateByUrl('/catboard');
    }
  }

  ngAfterViewInit(): void {
    this.imgRef.nativeElement.src = this.imageObjectUrl;
  }

}
