import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-container',
  template: `
    <div class="clock">
      <div class="outer-clock-face">
        <div class="marking marking-one"></div>
        <div class="marking marking-two"></div>
        <div class="marking marking-three"></div>
        <div class="marking marking-four"></div>
        <div class="inner-clock-face">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class ClockContainerComponent {}
