import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

}