import { Component, inject, signal } from '@angular/core';
import { Track } from '../models/track';
import { Track as TrackService } from '../services/track';

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.html'
})
export class Favorites {

  private service = inject(TrackService);

  favorites = signal<Track[]>([]);

  constructor() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.service.getFavorites().subscribe({
      next: tracks => this.favorites.set(tracks),
      error: err => console.error(err)
    });
  }

  removeFavorite(track: Track) {
    this.service.removeFavorite(track.id).subscribe({
      next: () => {
        this.favorites.update(list =>
          list.filter(t => t.id !== track.id)
        );
      },
      error: err => console.error(err)
    });
  }
}