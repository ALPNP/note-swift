import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Cost} from './../../models/cost.model';
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'add-cost-dialog',
    templateUrl: './add-cost-dialog.component.html',
    styleUrls: ['./add-cost-dialog.component.scss'],
    providers: [CostsService]
})
export class AddCostDialogComponent{

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
        this.addCostForm = new FormGroup({
            date: new FormControl('', Validators.required),
            type: new FormControl('', Validators.required),
            amount: new FormControl('', Validators.required)
        });
    }

    addNewCost() {
        this.loading = true;
        console.log(this.cost);
        this.costsService.addCost(this.cost);
        // this.dialogRef.close();
    }
}
