import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        

        if (currentUser) {

            this.authenticationService.login(currentUser);
            this.authenticationService.isLogged = true;

            console.log(currentUser)
      

            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.authenticationService.isLogged = false;
       
        return false;
    }
}