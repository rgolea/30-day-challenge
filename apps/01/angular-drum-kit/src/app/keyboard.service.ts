import { Injectable } from '@angular/core';
import { filter, fromEvent, map, merge, Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private keydown$ = fromEvent<KeyboardEvent>(window, 'keydown').pipe(share());

  getPlayingStream(key: string, el: HTMLDivElement): Observable<boolean> {
    return merge(
      this.keydown$.pipe(
        filter((ev) => ev.key.toUpperCase() === key?.toUpperCase()),
        map(() => true)
      ),
      fromEvent<TransitionEvent>(el, 'transitionend').pipe(
        filter(ev => ev.propertyName === 'transform'),
        map(() => false)
      )
    );
  }
}
