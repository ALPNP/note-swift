import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CostsService} from "../../services/costs.service";
import {Cost} from "../../models/cost.model";

@Component({
    selector: 'add-cost-dialog',
    templateUrl: './add-cost-dialog.component.html',
    styleUrls: ['./add-cost-dialog.component.scss'],
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
    costTypes: string[] = [
        'Доход',
        'Расход',
        'Непредвиденные расходы',
        'Непредвиденные доходы'
    ];

    constructor(public dialogRef: MdDialogRef<AddCostDialogComponent>,
                protected costsService: CostsService) {
    }

    ngOnInit() {
        this.strokeWidth = '15';
        this.spinnerWidth = '40px';
        this.spinnerHeight = '40px';
        this.addCostForm = new FormGroup({
            date: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            amount: new FormControl('', Validators.required)
        });
    }

    addNewCost() {
        this.loading = true;
        console.log(this.cost);
        this.costsService.addNewCost(this.cost).subscribe(
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
