import { Pipe, PipeTransform } from '@angular/core';
import { TimePeriod, TIME_SPLITS } from './clock-types';

@Pipe({ name: 'deg', pure: true })
export class ClockDegreesPipe implements PipeTransform {
  transform(time: number, period: TimePeriod): number {
    console.log({time, period});
    return (time / TIME_SPLITS[period]) * 360 + 90;
  }
}
