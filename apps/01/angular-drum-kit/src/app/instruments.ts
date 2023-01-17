import { InjectionToken } from '@angular/core';

export const INSTRUMENTS = new InjectionToken('INSTRUMENTS');

export const INSTRUMENTS_VALUES = [
  {
    letter: 'A',
    text: 'clap',
    soundSrc: '/assets/sounds/clap.wav',
  },
  {
    letter: 'S',
    text: 'hihat',
    soundSrc: '/assets/sounds/hihat.wav',
  },
  {
    letter: 'D',
    text: 'kick',
    soundSrc: '/assets/sounds/kick.wav',
  },
  {
    letter: 'F',
    text: 'openhat',
    soundSrc: '/assets/sounds/openhat.wav',
  },
  {
    letter: 'G',
    text: 'boom',
    soundSrc: '/assets/sounds/boom.wav',
  },
  {
    letter: 'H',
    text: 'ride',
    soundSrc: '/assets/sounds/ride.wav',
  },
  {
    letter: 'J',
    text: 'snare',
    soundSrc: '/assets/sounds/snare.wav',
  },
  {
    letter: 'K',
    text: 'tom',
    soundSrc: '/assets/sounds/tom.wav',
  },
  {
    letter: 'L',
    text: 'tink',
    soundSrc: '/assets/sounds/tink.wav',
  },
] as const;

export type Letter = typeof INSTRUMENTS_VALUES[number];
