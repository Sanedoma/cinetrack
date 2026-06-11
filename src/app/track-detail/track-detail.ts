import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Track as TrackService } from '../services/track';

import { toSignal } from '@angular/core/rxjs-interop';

import {
  map,
  switchMap
} from 'rxjs';

@Component({
  selector: 'app-track-detail',
  standalone: true,
  templateUrl: './track-detail.html',
  styleUrl: './track-detail.css',
})
export class TrackDetail {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(TrackService);

  protected track = toSignal(

    this.route.paramMap.pipe(

      map(params =>
        Number(params.get('id'))
      ),

      switchMap(id =>
        this.service.getTrack(id)
      )

    )

  );

  deleteTrack(){
    const currentTrack = this.track();
    if(!currentTrack){
      return;
    }

    this.service.deleteTrack(currentTrack.id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => {
        console.error(err);
      }
    });
  }

}