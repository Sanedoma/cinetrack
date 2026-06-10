import { Component, inject, input } from '@angular/core';
import { Track as Tracker} from '../services/track';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-track-detail',
  imports: [],
  standalone: true,
  templateUrl: './track-detail.html',
  styleUrl: './track-detail.css',
})
export class TrackDetail {

  trackId = input.required<number>();

  private service = inject(Tracker);
  protected track = toSignal(
    toObservable(this.trackId).pipe(
      switchMap(id => this.service.getTrack(id))
    )
  );
}
