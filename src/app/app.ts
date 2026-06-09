import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TrackList } from './track-list/track-list';
import { TrackForm } from './track-form/track-form';
import { Track as Tracker } from './services/track';

@Component({
  selector: 'app-root',
  imports: [
    TrackList,
    TrackForm
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {

  private trackService = inject(Tracker);
  
  tracks = toSignal(this.trackService.getTracks(), {
    initialValue: []
  });
}
