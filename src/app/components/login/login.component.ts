import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    providers: [AuthenticationService]
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;
    model: any = {};
    loading = false;
    error = '';

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    login() {
        console.log(this.model);
        this.loading = true;
        this.authenticationService.login(this.model.name, this.model.password).subscribe();
    }
}
