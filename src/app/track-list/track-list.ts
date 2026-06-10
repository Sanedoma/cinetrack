import { Component, input, signal, computed, output } from '@angular/core';
import { Track } from '../models/track';
import { TrackCard } from '../track-card/track-card';

@Component({
  selector: 'app-track-list',
  imports: [TrackCard],
  templateUrl: './track-list.html',
  styleUrl: './track-list.css',
})
export class TrackList {
  tracks = input.required<Track[]>();
  protected selectedId = signal<number | null>(null);

  selectedTrack = output<number>();
  searchTerm = signal('');
  filteredTracks = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();

    if(!term){
      return this.tracks();
    }

    return this.tracks().filter(track => 
      track.title.toLowerCase().includes(term) ||
      track.artist.toLowerCase().includes(term)
    );
  });
}
