import {Component, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NotificationsService} from "angular2-notifications/dist";
import {AddCostDialogComponent} from "../add-cost-dialog/add-cost-dialog.component";

@Component({
    selector: 'add-cost',
    templateUrl: 'add-cost.component.html',
    styleUrls: ['add-cost.component.scss']
})
export class AddCostComponent {

    @Output() costAdded = new EventEmitter<boolean>();

    constructor(public dialog: MatDialog,
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
                this.costAdded.emit(result);
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
