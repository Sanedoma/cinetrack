import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TrackList } from './track-list/track-list';
import { TrackForm } from './track-form/track-form';
import { Track as Tracker } from './services/track';
import { TrackDetail } from './track-detail/track-detail';
import { TrackSearch } from './track-search/track-search';

@Component({
  selector: 'app-root',
  imports: [
    TrackList,
    TrackForm,
    TrackDetail,
    TrackSearch
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
