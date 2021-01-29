import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'chp-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  @Input()
  public cat: Cat;

  constructor() {
  }

  ngOnInit(): void {
  }

}
