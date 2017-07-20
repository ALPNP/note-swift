import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {AddCostDialogComponent} from "../add-cost-dialog/add-cost-dialog.component";
import {NotificationsService} from "angular2-notifications/dist";


@Component({
    selector: 'add-cost',
    templateUrl: './add-cost.component.html',
    styleUrls: ['./add-cost.component.scss']
})
export class AddCostComponent {
    constructor(public dialog: MdDialog,
                private notificationsService: NotificationsService) {
    }

    public options = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    addCost(): void {
        let dialogRef = this.dialog.open(AddCostDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (typeof result === 'boolean' && result) {
                this.notificationsService.success('Успех', 'Операция сохранена');
            } else if (result && !result['ok']) {
                this.notificationsService.error('Ошибка', 'Операция не сохранена');
            } else if (typeof result === 'undefined') {
                // maybe need tomorrow
            } else {

            }
        });
    }
}
