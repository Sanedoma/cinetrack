import { Component, inject, signal } from '@angular/core';
import { Track as Tracker } from '../services/track';
import { Track } from '../models/track';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-track-search',
  imports: [],
  templateUrl: './track-search.html',
  styleUrl: './track-search.css',
})
export class TrackSearch {

  private service = inject(Tracker);

  protected term = signal('');
  protected results = toSignal(
    toObservable(this.term).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap( q => 
        this.service.search(q).pipe(
          catchError(() => of([] as Track[]))
        )
      )
    ),
    {
      initialValue: [] as Track[],
    }
  );
}
