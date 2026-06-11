import { HttpClient, HttpParams } from '@angular/common/http';
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

    search(query: string){
        const param = new HttpParams().set('q', query);
        return this.http.get<Tracker[]>(this.baseUrl, { params: param })
    }

    createTrack(track: Tracker){
        return this.http.post<Tracker>(
            this.baseUrl,
            track
        );
    }

    updateTrack(track: Tracker) {
        return this.http.put<Tracker>(
            `${this.baseUrl}/${track.id}`,
            track
        );
    }

    deleteTrack(id: number) {
        return this.http.delete(
            `${this.baseUrl}/${id}`
        );
    }

}
