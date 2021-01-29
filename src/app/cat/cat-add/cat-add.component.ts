import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chp-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.scss']
})
export class CatAddComponent implements OnInit {

  imageData: ArrayBuffer;

  constructor(private readonly router: Router) {
    this.imageData = this.router.getCurrentNavigation().extras.state?.imageData;
  }

  ngOnInit(): void {
    if (this.imageData == null) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
