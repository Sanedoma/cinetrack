import { Component, inject, signal } from '@angular/core';
import { form, required, max, min, FormField } from '@angular/forms/signals';
import { Track as TrackService } from '../services/track';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-form',
  imports: [FormField],
  templateUrl: './track-form.html',
  styleUrl: './track-form.css',
  standalone: true
})
export class TrackForm {
  private trackService = inject(TrackService);
  private router = inject(Router)

  protected model = signal({  title: '', artist: '', rating: 5 });

  protected trackForm = form(this.model, (path) => {
    required(path.title, { message: 'Le titre est requis' });
    required(path.artist, { message: "L'artiste est requis" });
    min(path.rating, 0);
    max(path.rating, 10);
  });

  onSubmit(event: Event){
    event.preventDefault();
    if(!this.trackForm().valid()){
      return;
    }
    const track ={
      id: 0,
      title: this.model().title,
      artist: this.model().artist,
      rating: this.model().rating,
      album: 'Unknown',
      genre: 'Unknown',
      durationSeconds: 180,
      year: 2026,
      favorite: false,
      coverUrl: 'https://picsum.photos/300'
    };
    this.trackService.createTrack(track).subscribe({
      next: created => {
        console.log(
          'créé',
          created
        );
        this.router.navigate(['/']);
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
