import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddCostDialogComponent} from "../add-cost-dialog/add-cost-dialog.component";

@Component({
    selector: 'add-cost',
    templateUrl: './add-cost.component.html',
    styleUrls: ['./add-cost.component.scss']
})
export class AddCostComponent{
    constructor(public dialog: MdDialog){
    }

    addCost() {
        let dialogRef = this.dialog.open(AddCostDialogComponent);
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
        });
    }
}
