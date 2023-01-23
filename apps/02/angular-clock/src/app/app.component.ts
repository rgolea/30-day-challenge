import { Component, ViewEncapsulation } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  time$ = interval(1000).pipe(
    map(() => new Date()),
    startWith(new Date())
  );
}
