import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Layout } from '../../../shared/enums/layout.enum';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnChanges {

  @Input()
  public layout: Layout;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.layout.previousValue !== changes.layout.currentValue) {
      console.log('New layout!', this.layout);
    }
  }

}
