import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onFileChange($event): void {
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = () => {
        console.log(reader.result);
        this.router.navigateByUrl('/add', {
          state: { imageData: reader.result }
        });
      };

      reader.readAsArrayBuffer($event.target.files[0]);

    }

  }

}
