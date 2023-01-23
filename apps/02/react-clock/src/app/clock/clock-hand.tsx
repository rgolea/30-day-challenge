import { useMemo } from 'react';

const TIME_SPLITS = {
  HOUR: 12,
  MINUTES: 60,
  SECONDS: 60,
} as const;

type TimePeriod = keyof typeof TIME_SPLITS;

export type ClockHandProps = {
  type: TimePeriod;
  time: number;
};

function calculateDegrees(time: number, period: TimePeriod) {
  return (time / TIME_SPLITS[period]) * 360 + 90;
}

export function ClockHand({ type, time }: ClockHandProps) {
  const degrees = useMemo(() => {
    return calculateDegrees(time, type);
  }, [time, type]);

  return <div style={{ transform: `rotate(${degrees}deg)` }} className={`hand ${type.toLowerCase()}-hand`}></div>;
}
