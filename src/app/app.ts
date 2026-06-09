import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Track } from './models/track';
import { TrackList } from './track-list/track-list';

@Component({
  selector: 'app-root',
  imports: [TrackList],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  tracks = signal<Track[]>([
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      genre: 'Synth-pop',
      durationSeconds: 200,
      year: 2019,
      rating: 9,
      favorite: true,
      coverUrl: 'https://picsum.photos/seed/1/300',
    },
    {
      id: 2,
      title: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      genre: 'Pop',
      durationSeconds: 167,
      year: 2022,
      rating: 8,
      favorite: false,
      coverUrl: 'https://picsum.photos/seed/2/300'
    },
    {
      id: 3,
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      album: '=',
      genre: 'Pop',
      durationSeconds: 231,
      year: 2021,
      rating: 8,
      favorite: true,
      coverUrl: 'https://picsum.photos/seed/3/300'
    },
    {
      id: 4,
      title: 'Flowers',
      artist: 'Miley Cyrus',
      album: 'Endless Summer Vacation',
      genre: 'Pop',
      durationSeconds: 200,
      year: 2023,
      rating: 7,
      favorite: false,
      coverUrl: 'https://picsum.photos/seed/4/300'
    },
    {
      id: 5,
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      genre: 'Disco Pop',
      durationSeconds: 203,
      year: 2020,
      rating: 9,
      favorite: true,
      coverUrl: 'https://picsum.photos/seed/5/300'
    },
    {
      id: 6,
      title: 'Stay',
      artist: 'The Kid LAROI',
      album: 'F*CK LOVE 3',
      genre: 'Pop',
      durationSeconds: 141,
      year: 2021,
      rating: 8,
      favorite: false,
      coverUrl: 'https://picsum.photos/seed/6/300'
    }
  ]);
}
