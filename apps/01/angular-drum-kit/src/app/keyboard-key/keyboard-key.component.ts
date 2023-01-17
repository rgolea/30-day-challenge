import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  inject,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { KeyboardService } from '../keyboard.service';

@Component({
  selector: 'drumkit-keyboard-key',
  template: `
    <div class="key" #key [ngClass]="{ playing: isPlaying$ | async }">
      <kbd>{{ letter }}</kbd>
      <span class="sound">
        <ng-content></ng-content>
      </span>
    </div>
  `,
})
export class KeyboardKeyComponent implements OnInit {
  @Input() letter!: string;
  @Input() soundURL!: string;

  @ViewChild('key', { static: true }) keyEl!: ElementRef<HTMLDivElement>;

  public isPlaying$!: Observable<boolean>;

  private readonly keyboardService = inject(KeyboardService);

  ngOnInit(): void {
    const audio = new Audio(this.soundURL);

    this.isPlaying$ = this.keyboardService.getPlayingStream(
      this.letter,
      this.keyEl.nativeElement
    ).pipe(
      tap(() => {
        audio.currentTime = 0;
        audio.play();
      })
    );
  }
}
