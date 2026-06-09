import { Component, input, signal } from '@angular/core';
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
}
