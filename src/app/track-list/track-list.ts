import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Track } from '../models/track';
import { TrackCard } from '../track-card/track-card';

import { Track as TrackService } from '../services/track';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-list',
  imports: [TrackCard],
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackList {

  private trackService = inject(TrackService);
  private router = inject(Router);

  goToDetail(id: number){
    this.selectedId.set(id);
    this.router.navigate([
      '/tracks',
      id
    ]);
  }

  tracks = toSignal(
    this.trackService.getTracks(),
    {
      initialValue: [] as Track[]
    }
  );

  protected selectedId = signal<number | null>(null);

  searchTerm = signal('');

  filteredTracks = computed(() => {

    const term = this.searchTerm().toLowerCase().trim();

    if (!term) {
      return this.tracks();
    }

    return this.tracks().filter(track =>
      track.title.toLowerCase().includes(term) ||
      track.artist.toLowerCase().includes(term)
    );

  });

}