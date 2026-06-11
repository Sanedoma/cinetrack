import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Track as Tracker } from './services/track';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {

  private trackService = inject(Tracker);
  
  selectedTrack = signal<number>(1);

  tracks = toSignal(this.trackService.getTracks(), {
    initialValue: []
  });
}
