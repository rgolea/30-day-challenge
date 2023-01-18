import { interval, map, startWith } from 'rxjs';

const hourHand = document.querySelector<HTMLDivElement>('.hour-hand');
const minuteHand = document.querySelector<HTMLDivElement>('.min-hand');
const secondHand = document.querySelector<HTMLDivElement>('.second-hand');
const timeRectangle = document.querySelector<HTMLDivElement>('.time');

const formatter = Intl.NumberFormat(navigator.language, {
  minimumIntegerDigits: 2,
});

const TIME_SPLITS = {
  HOUR: 12,
  MINUTES: 60,
  SECONDS: 60,
} as const;

type TimePeriod = keyof typeof TIME_SPLITS;

function calculateDegrees(time: number, period: TimePeriod) {
  return (time / TIME_SPLITS[period]) * 360 + 90;
}

function rotateDegrees(el: HTMLDivElement | null, degrees: number) {
  if (!el) return;
  el.style.transform = `rotate(${degrees}deg)`;
}

interval(1000)
  .pipe(
    map(() => new Date()),
    startWith(new Date())
  )
  .subscribe((date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    rotateDegrees(secondHand, calculateDegrees(second, 'SECONDS'));
    rotateDegrees(
      minuteHand,
      calculateDegrees(minute, 'MINUTES') + second / 10
    );
    rotateDegrees(hourHand, calculateDegrees(hour, 'HOUR') + minute / 2);
    if (timeRectangle)
      timeRectangle.innerHTML = `<span>${[hour, minute, second]
        .map(formatter.format)
        .join(':')}</span>`;
  });

export {};
