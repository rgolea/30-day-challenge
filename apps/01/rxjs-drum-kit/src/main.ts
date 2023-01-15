import { filter, from, map, mergeMap, fromEvent } from 'rxjs';

const keysEl = Array.from(document.querySelectorAll<HTMLDivElement>('.key'));

const keys = keysEl.map(key => key.getAttribute('data-key'));


fromEvent<KeyboardEvent>(window, 'keydown')
  .pipe(
    map(ev => ev.key.toUpperCase().charCodeAt(0).toString()),
    filter(key => keys.includes(key)),
    map(key => keysEl.find(el => el.getAttribute('data-key') === key)),
    filter(Boolean),
  )
  .subscribe((el) => {
    el.classList.add('playing');
    const audio = el.querySelector<HTMLAudioElement>('audio');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
  });

from(keysEl)
  .pipe(
    mergeMap(el => fromEvent<TransitionEvent>(el, 'transitionend').pipe(
      filter(ev => ev.propertyName === 'transform'),
      map(() => el)
    )),
  )
  .subscribe(el => {
    el.classList.remove('playing');
  });

export {};
