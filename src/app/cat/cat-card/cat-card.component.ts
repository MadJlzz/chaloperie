import { Component, Input } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'chp-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {

  @Input()
  public cat: Cat;

  liked = false;

  onLikeClick(): void {
    this.liked = !this.liked;
  }

}
