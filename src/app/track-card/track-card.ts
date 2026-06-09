import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Track } from '../models/track';

@Component({
  selector: 'app-track-card',
  imports: [],
  templateUrl: './track-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './track-card.css',
})
export class TrackCard {
  track = input.required<Track>();
}
