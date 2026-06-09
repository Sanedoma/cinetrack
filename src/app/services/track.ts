import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environement } from '../../environements/environement';

import { Track as Tracker } from '../models/track' ;

@Injectable({
    providedIn: 'root'
})
export class Track {
    private http = inject(HttpClient);
    private  baseUrl = `${environement.apiUrl}/tracks`;
    getTracks(){
        return this.http.get<Tracker[]>(this.baseUrl);
    }

    getTrack(id: number){
        return this.http.get<Tracker>(`${this.baseUrl}/${id}`);
    }
}
