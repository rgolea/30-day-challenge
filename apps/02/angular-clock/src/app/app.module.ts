import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockContainerComponent } from './clock/clock-container.component';
import { ClockDegreesPipe } from './clock/clock-degrees.pipe';
import { ClockDigitalComponent } from './clock/clock-digital.component';
import { ClockHandComponent } from './clock/clock-hand.component';

@NgModule({
  declarations: [AppComponent, ClockContainerComponent, ClockHandComponent, ClockDegreesPipe, ClockDigitalComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
