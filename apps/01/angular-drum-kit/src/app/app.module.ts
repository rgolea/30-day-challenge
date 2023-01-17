import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { INSTRUMENTS, INSTRUMENTS_VALUES } from './instruments';
import { KeyboardKeyComponent } from './keyboard-key/keyboard-key.component';

import { KeyboardService } from './keyboard.service';

@NgModule({
  declarations: [AppComponent, KeyboardKeyComponent],
  imports: [BrowserModule],
  providers: [KeyboardService, {
    provide: INSTRUMENTS,
    useValue: INSTRUMENTS_VALUES
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
