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
    genderType: number;

    genderTypes: Object[] = [
        {
            name: "Мужской",
            typeId: 0
        },
        {
            name: "Женский",
            typeId: 1
        }
    ];

    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.freshUser = new User();
        this.registerFormInitializer();
    }

    registerFormInitializer(): void {
        this.registerForm = this.formBuilder.group({
            login: ['', [Validators.required]],
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            genderType: ['', [Validators.required]],
            genderSubForm: this.formBuilder.array([])
        });
    }

    genderSubFormBuilder(id: number): void {
        switch (id) {
            case 0:
                this.createMaleForm();
                break;
            case 1:
                this.createFemaleForm();
                break;
            default:
                console.error('gender type not valid');
        }
    }

    createFemaleForm(): void {
        let ctx = this;
        ctx.freshUser.setUserSpecific(new UserSpecific());
        ctx.registerForm.controls.genderSubForm['controls'] = [];
        const genderSubForm = <FormArray>this.registerForm.get('genderSubForm');
        genderSubForm.push(addFemaleForm());

        function addFemaleForm(): FormGroup {
            return ctx.formBuilder.group({
                eyes: ['']
            });
        }

        this.genderType = this.freshUser['genderTypeId'];
    }

    createMaleForm(): void {
        let ctx = this;
        ctx.freshUser.setUserSpecific(new UserSpecific());
        ctx.registerForm.controls.genderSubForm['controls'] = [];
        const genderSubForm = <FormArray>this.registerForm.get('genderSubForm');
        genderSubForm.push(addMaleForm());

        function addMaleForm(): FormGroup {
            return ctx.formBuilder.group({
                weight: ['']
            });
        }

        this.genderType = this.freshUser['genderTypeId'];
    }

    submit(): void {
        console.log(this.freshUser);
        console.log('submit');
    }
}
