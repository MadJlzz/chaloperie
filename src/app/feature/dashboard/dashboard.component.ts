import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Layout } from '../../shared/enums/layout.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  private layoutChangeValue;
  private layoutChangeSubscription: Subscription;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
  }

  public get LayoutChangeValue(): Layout {
    return this.layoutChangeValue;
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

}
