import { Component, signal } from '@angular/core';
import { form, required, max, min, FormField } from '@angular/forms/signals';


@Component({
  selector: 'app-track-form',
  imports: [FormField],
  templateUrl: './track-form.html',
  styleUrl: './track-form.css',
  standalone: true
})
export class TrackForm {
  protected model = signal({  title: '', artist: '', rating: 5 });

  protected trackForm = form(this.model, (path) => {
    required(path.title, { message: 'Le titre est requis' });
    required(path.artist, { message: "L'artiste est requis" });
    min(path.rating, 0);
    max(path.rating, 10);
  });

  onSubmit(event: Event){
    event.preventDefault();
    if(this.trackForm().valid()){
      console.log('Track valide :', this.model());
    }
  }
}
