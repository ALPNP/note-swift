import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    canActivate() {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        } else {
            this.authenticationService.deleteAuthData();
            this.router.navigate(['/login']);
            return false;
        }
    }
}
