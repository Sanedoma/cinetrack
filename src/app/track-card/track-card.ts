import { Component } from '@angular/core';
import { Track } from '../models/track';

@Component({
  selector: 'app-track-card',
  imports: [],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css',
})
export class TrackCard {

  track = input.required<Track>();
}
