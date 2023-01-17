import { Component, inject } from '@angular/core';
import { INSTRUMENTS, Letter } from './instruments';

@Component({
  selector: 'drumkit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public INSTRUMENTS = inject<Letter[]>(INSTRUMENTS);
}
