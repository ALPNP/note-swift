import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {AuthenticationService} from '../../services/authentication.service';
import {NotificationsService} from "angular2-notifications/dist";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [
        AuthenticationService
    ]
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    model: any = {};

    public options = {
        position: ["bottom", "right"],
        timeOut: 6000,
        lastOnBottom: true
    };

    constructor(private router: Router,
                private notificationsService: NotificationsService,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    login() {
        this.authenticationService.login(this.model.name, this.model.password).subscribe(
            data => {
                if (data) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.loginForm.reset();
                    this.notificationsService.error('Ошибка', 'Некорректный логин или пароль');
                }
            },
            error => console.log(error),
            () => {}
        );
    }
}
