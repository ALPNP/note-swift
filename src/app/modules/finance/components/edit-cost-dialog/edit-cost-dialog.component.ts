import {Component, OnInit, Inject, Optional} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CostsService} from "../../services/costs.service";
import {MdDialogRef, MD_DIALOG_DATA} from "@angular/material";
import {Cost} from "../../models/cost.model";

@Component({
    selector: 'edit-cost-dialog',
    templateUrl: './edit-cost-dialog.component.html',
    styleUrls: ['./edit-cost-dialog.component.scss']
})
export class EditCostDialogComponent implements OnInit {

    cost: Cost;

    strokeWidth: string;
    spinnerHeight: string;
    spinnerWidth: string;

    loading: boolean = false;
    editCostForm: FormGroup;

    costTypes: any[] = [
        {
            id: 0,
            name: 'Доход',
            icon: 'add'
        },
        {
            id: 1,
            name: 'Расход',
            icon: 'remove'
        }
    ];

    notifyOptions: any = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    constructor(private costsService: CostsService,
                @Optional() @Inject(MD_DIALOG_DATA) private dialogData: any,
                public dialogRef: MdDialogRef<EditCostDialogComponent>) {

    }

    ngOnInit() {
        this.strokeWidth = '15';
        this.spinnerWidth = '40px';
        this.spinnerHeight = '40px';
        this.editCostForm = new FormGroup({
            description: new FormControl(''),
            date: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            amount: new FormControl('', Validators.required)
        });

        this.cost = this.dialogData;
    }

    deleteCost(e, id: string) {
        let curTar = e.currentTarget;
        curTar.disabled = true;

        this.costsService.deleteCost(id)
            .finally(() => {
                curTar.disabled = false
            })
            .subscribe(
                data => {
                    if (data['success']) {
                        this.dialogRef.close(true);
                    }

                    if (!data['success']) {
                        this.dialogRef.close(false);
                    }
                },
                err => {
                    console.log(err);
                    this.dialogRef.close(err);
                }
            );
    }

    updateCost(cost) {
        this.loading = true;
        this.costsService.updateCost(cost)
            .finally(() => {
                this.loading = false;
            })
            .subscribe(
                data => {
                    this.dialogRef.close(true);
                },
                err => {
                    console.log(err);
                    this.dialogRef.close(false);
                }
            );
    }
}
