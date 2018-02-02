import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {CostsService} from "../../services/costs.service";
import {NotificationsService} from "angular2-notifications/dist";
import {EditCostDialogComponent} from "../edit-cost-dialog/edit-cost-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
    selector: 'costs-list',
    templateUrl: 'costs-list.component.html',
    styleUrls: ['costs-list.component.scss']
})
export class CostsListComponent implements OnInit {
    @Output() costDeleted = new EventEmitter<boolean>();
    @Output() costEdited = new EventEmitter<boolean>();
    costs: any = [];
    costsLoaded: boolean = false;
    filterToggle: boolean = true;
    notifyOptions: any = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    constructor(private costsService: CostsService,
                private notificationsService: NotificationsService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.getCosts();
        this.costsService.costsSortingReset$.subscribe(data => {
            if (data) {
                this.costs = this.costsService.costs;
            }
        });
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

    editCost(cost) {
        const config = new MatDialogConfig();
        config.data = cost;
        let dialogRef = this.dialog.open(EditCostDialogComponent, config);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.costEdited.emit();
                this.notificationsService.success('Успех', 'Изменения произведены');
            } else if (result === false) {
                this.notificationsService.error('Ошибка', 'Изменения не сохранены');
            }
        });
    }

    toggleFilterParams() {
        this.filterToggle = !this.filterToggle;
    }
}
