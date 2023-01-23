export const TIME_SPLITS = {
  HOUR: 12,
  MINUTES: 60,
  SECONDS: 60,
} as const;

export type TimePeriod = keyof typeof TIME_SPLITS;
