// app/auth.service.ts

import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock('AlClPgT1v0xgVwcJ33Ojt6XcpcymgB3Q', 'gabih.auth0.com', {});

    constructor(private router: Router) {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            })
            localStorage.setItem('id_token', authResult.idToken);
            let link = ['/dashboard'];
            this.router.navigate(link);
        });
        //console.log("Id Token : " + localStorage.getItem('id_token'));
        //console.log(localStorage.getItem('profile'));
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();       
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }
}