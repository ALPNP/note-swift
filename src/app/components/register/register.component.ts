import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormArray} from "@angular/forms";
import {User, UserSpecific} from "../../models/user.model";

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
    freshUser: User;
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.freshUser = new User();
        this.registerFormInitializer();
    }

    registerFormInitializer(): void {
        this.registerForm = this.formBuilder.group({
            name: [this.freshUser.name, [Validators.required]],
            login: [this.freshUser.login, [Validators.required]],
            password: [this.freshUser.password, [Validators.required, Validators.minLength(10)]],
            email: [this.freshUser.email, [Validators.required]]
        });
    }

    submit(e): void {
        console.log(e);
        console.log(this.freshUser);
        console.log('submit');
    }
}
