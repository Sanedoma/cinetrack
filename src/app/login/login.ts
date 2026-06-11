import { Component, inject, signal } from '@angular/core';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private auth = inject(Auth);

  email = signal('demo@ipssi.fr');
  password = signal('password123');

  login() {

    this.auth.login(
      this.email(),
      this.password()
    ).subscribe({

      next: () => {
        console.log('Connexion réussie');
      },

      error: (err) => {
        console.error('Erreur de connexion', err);
      }

    });

  }

}