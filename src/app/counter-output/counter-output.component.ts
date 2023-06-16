import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter$: Observable<number>;

  constructor(private readonly store: Store<{counter:number}>) {
    this.counter$ = store.select('counter');
  }
}
