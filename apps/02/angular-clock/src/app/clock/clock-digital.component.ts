import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock-digital',
  template: `
    <div class="time">{{hours | number: '2.0-0'}}:{{minutes | number: '2.0-0'}}:{{seconds | number: '2.0-0'}}</div>
  `
})
export class ClockDigitalComponent {
  @Input() date!: Date;

  get hours(){
    return this.date.getHours();
  }

  get minutes(){
    return this.date.getMinutes();
  }

  get seconds(){
    return this.date.getSeconds();
  }
}
