import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Layout } from '../../shared/enums/layout.enum';
import { CATS } from '../cat.mock';
import { Cat } from '../cat.model';

@Component({
  selector: 'chp-catboard',
  templateUrl: 'catboard.component.html',
  styleUrls: ['catboard.component.scss']
})
export class CatboardComponent implements OnInit, OnDestroy {

  private layoutChangeValue;
  private layoutChangeSubscription: Subscription;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
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
  }

  ngOnDestroy(): void {
    this.layoutChangeSubscription.unsubscribe();
  }

  public cats(): Cat[] {
    return CATS;
  }

}
