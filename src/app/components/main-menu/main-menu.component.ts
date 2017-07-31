import {Component} from  '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'main-menu',
    templateUrl: 'main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

    constructor(private authService: AuthenticationService) {
    }

    logOut() {
        this.authService.logOut();
    }
}
