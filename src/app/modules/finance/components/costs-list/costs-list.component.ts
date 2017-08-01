import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {CostsService} from "../../services/costs.service";
import {NotificationsService} from "angular2-notifications/dist";
import {EditCostDialogComponent} from "../edit-cost-dialog/edit-cost-dialog.component";
import {MdDialog, MdDialogConfig} from "@angular/material";

@Component({
    selector: 'costs-list',
    templateUrl: 'costs-list.component.html',
    styleUrls: ['costs-list.component.scss'],
    providers: [CostsService]
})
export class CostsListComponent implements OnInit {

    @Output() costDeleted = new EventEmitter<boolean>();
    @Output() costEdited = new EventEmitter<boolean>();

    costs: any = [];
    costsLoaded: boolean = false;

    notifyOptions: any = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    constructor(private costsService: CostsService,
                private notificationsService: NotificationsService,
                public dialog: MdDialog) {
    }

    ngOnInit() {
        this.getCosts();
    }

    getCosts(options?: any) {
        this.costsService.getCosts(options).subscribe(
            data => {
                this.costs = data;
                this.costsLoaded = true;
            },
            err => {
                console.log(err);
            }
        )
    }

    editCost(cost){
        const config = new MdDialogConfig();
        config.data = cost;
        let dialogRef = this.dialog.open(EditCostDialogComponent, config);
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.costEdited.emit();
            if (typeof result === 'boolean' && result) {
                this.notificationsService.success('Успех', 'Операция удалена');
            } else if (result && !result['ok']) {
                this.notificationsService.error('Ошибка', '');
            } else if (result === false) {
                this.notificationsService.error('Ошибка', 'Операция не удалена');
            }else if (typeof result === 'undefined') {
                // maybe need tomorrow
            } else {

            }
        });
    }
}
