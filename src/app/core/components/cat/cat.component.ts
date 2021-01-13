import { Component, Input, OnInit } from '@angular/core';
import { Layout } from '../../../shared/enums/layout.enum';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  @Input()
  public layout: Layout;

  constructor() { }

  ngOnInit(): void {
    console.log(this.layout);
  }

}
