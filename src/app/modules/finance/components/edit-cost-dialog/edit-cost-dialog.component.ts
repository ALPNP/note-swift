import {Component, OnInit, Inject, Optional} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CostsService} from "../../services/costs.service";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Cost} from "../../models/cost.model";
import _ from 'lodash';
import {AddCostDialogComponent} from "../add-cost-dialog/add-cost-dialog.component";

@Component({
    selector: 'edit-cost-dialog',
    templateUrl: './edit-cost-dialog.component.html',
    styleUrls: ['./edit-cost-dialog.component.scss']
})
export class EditCostDialogComponent extends AddCostDialogComponent implements OnInit {

    cost: Cost;
    costDate: Date;
    editCostForm: FormGroup;

    notifyOptions: any = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    constructor(protected costsService: CostsService,
                @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any,
                public dialogRef: MatDialogRef<EditCostDialogComponent>) {
        super(dialogRef, costsService);
    }

    ngOnInit() {
        this.cost = _.cloneDeep(this.dialogData);
        this.costDate = new Date(this.cost.date);
        this.editCostFormInit();
        this.setSpinnerParams();
    }

    editCostFormInit(): void {
        this.editCostForm = new FormGroup({
            description: new FormControl(this.cost.description),
            date: new FormControl(this.costDate, Validators.required),
            type: new FormControl(this.cost.type, Validators.required),
            amount: new FormControl(this.cost.amount, [Validators.required, Validators.pattern(/^[0-9]+$/)])
        });
    }

    deleteCost(e, id: string): void {
        let curTar = e.currentTarget;
        curTar.disabled = true;

        this.costsService.deleteCost(id)
            .finally(() => curTar.disabled = false)
            .subscribe(data => {
                    if (data['success']) {
                        this.dialogRef.close(true);
                    }

                    if (!data['success']) {
                        this.dialogRef.close(false);
                    }
                }, err => {
                    console.log(err);
                    this.dialogRef.close(err);
                }
            );
    }

    updateCost(cost: Cost): void {
        cost['date'] = this.costDate.toISOString();

        this.loading = true;
        this.costsService.updateCost(cost)
            .finally(() => this.loading = false)
            .subscribe(data => {
                    this.dialogRef.close(true);
                }, err => {
                    this.dialogRef.close(false);
                }
            );
    }

    costDateInput(e): void {
        if (e.value) {
            console.log(e.value);
        }
    }

    costDateChange(e): void {
        if (e.value) {
            console.log(e.value);
        }
    }
    // override
    public getErrorMessage(formField: string, formErrorText: string) {
        return this.editCostForm.get(formField).hasError('required') ? (formErrorText || 'Заполните это поле') : '';
    }
}
