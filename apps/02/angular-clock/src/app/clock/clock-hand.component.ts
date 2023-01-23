import { Component, Input } from '@angular/core';
import { ClockDegreesPipe } from './clock-degrees.pipe';
import { TimePeriod } from './clock-types';

@Component({
  selector: 'app-clock-hand',
  template: `
    <div
      class="hand"
      [ngClass]="type.toLowerCase() + '-hand'"
      [style.transform]="'rotate('+ (time | deg: type) + 'deg)'"
    >
    </div>
  `,
  providers: [ClockDegreesPipe]
})
export class ClockHandComponent {
  @Input() type!: TimePeriod;
  @Input() time!: number;
}
