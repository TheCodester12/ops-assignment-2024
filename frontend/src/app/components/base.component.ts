import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: '',
})
export class BaseComponent implements OnInit, OnDestroy {
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  cdr: ChangeDetectorRef;

  ngOnInit(): void {
    this.bindObservables();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  bindObservables() {}
}
