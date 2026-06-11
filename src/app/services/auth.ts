import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environement } from '../../environements/environement';
import { tap } from 'rxjs';

interface LoginResponse {
    accessToken: string;
    user: {
        id: number;
        email: string;
        name: string;

    };
}

@Injectable({
    providedIn: 'root',
})
export class Auth {
    private http = inject(HttpClient);
    private tokenSignal = signal<string | null>(
        localStorage.getItem('token')
    );
    readonly isLoggedIn = computed(() => this.tokenSignal() !== null);

    get token(){
        return this.tokenSignal();
    }

    login(email: string, password: string){
        return this.http.post<LoginResponse>(`${environement.apiUrl}/login`, {
            email,
            password
        }).pipe(tap(res => {
            localStorage.setItem('token', res.accessToken);
            this.tokenSignal.set(res.accessToken);
        }));

    }

    Logout(){
        localStorage.removeItem('token');
        this.tokenSignal.set(null);
    }
}
