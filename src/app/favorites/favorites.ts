import { Component, inject } from '@angular/core';
import { Track as TrackService } from '../services/track';
import { toSignal } from '@angular/core/rxjs-interop';
import { TrackList } from '../track-list/track-list';

@Component({
  selector: 'app-favorites',
  imports: [TrackList],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  standalone: true
})
export class Favorites {
  private service = inject(TrackService);
  favorites = toSignal(
    this.service.getFavorites(),
    {
      initialValue: []
    }
  );
}
