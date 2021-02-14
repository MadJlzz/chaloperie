import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatService } from '../../core-providers/cat.service';
import { Layout } from '../../shared/enums/layout.enum';
import { Cat } from '../cat.model';

@Component({
  selector: 'chp-catboard',
  templateUrl: 'catboard.component.html',
  styleUrls: ['catboard.component.scss']
})
export class CatboardComponent implements OnInit, OnDestroy {

  private layoutChangeValue;
  private layoutChangeSubscription: Subscription;

  private currentCats: Cat[];
  private currentCatsSubscription: Subscription;

  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly catService: CatService) {
  }

  ngOnInit(): void {
    const layoutStyles = Layout.values()
      .map(layout => layout.MediaQuery);

    const layoutChanges = this.breakpointObserver.observe(layoutStyles);

    this.layoutChangeSubscription = layoutChanges.subscribe(result => {
      const breakpoint = Object.entries(result.breakpoints)
        .find(([mediaQuery, matched]) => matched === true);
      this.layoutChangeValue = Layout.from(breakpoint[0]);
    });

    this.currentCatsSubscription = this.catService.readAll().subscribe(
      value => {
        this.currentCats = value.cats;
      }
    );
  }

  ngOnDestroy(): void {
    this.layoutChangeSubscription.unsubscribe();
    this.currentCatsSubscription.unsubscribe();
  }

  public cats(): Cat[] {
    return this.currentCats;
  }

}
