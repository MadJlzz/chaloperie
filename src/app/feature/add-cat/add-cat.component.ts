import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {

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
