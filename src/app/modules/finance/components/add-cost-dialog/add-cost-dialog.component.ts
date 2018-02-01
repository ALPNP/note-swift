import {Component, OnInit} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Cost} from "../../models/cost.model";
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'add-cost-dialog',
    templateUrl: 'add-cost-dialog.component.html',
    styleUrls: ['add-cost-dialog.component.scss'],
    providers: [
        CostsService
    ]
})
export class AddCostDialogComponent implements OnInit{

    strokeWidth: string;
    spinnerHeight: string;
    spinnerWidth: string;
    loading: boolean = false;
    addCostForm: FormGroup;
    cost: Cost = new Cost();

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

    constructor(public dialogRef: MatDialogRef<AddCostDialogComponent>,
                protected costsService: CostsService) {
    }

    ngOnInit() {
        this.setSpinnerParams();
        this.addCostFormInit();
    }

    addCostFormInit(): void {
        this.addCostForm = new FormGroup({
            description: new FormControl(''),
            date: new FormControl(this.cost.date, Validators.required),
            type: new FormControl('', Validators.required),
            amount: new FormControl('', [
                Validators.required, Validators.pattern(/^[0-9]+$/)
            ])
        });
    }

    setSpinnerParams(): void {
        this.strokeWidth = '15';
        this.spinnerWidth = '40px';
        this.spinnerHeight = '40px';
    }

    addNewCost(): void {
        this.loading = true;
        this.costsService.addNewCost(this.cost)
            .finally(() => this.loading = false)
            .subscribe(
            data => {
                this.dialogRef.close(data['success']);
            },
            err => {
                this.dialogRef.close(err);
            },
            () => {
                this.loading = false;
            }
        );
    }
}
