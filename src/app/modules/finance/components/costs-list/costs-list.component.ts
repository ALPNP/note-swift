import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {CostsService} from "./../../services/costs.service";
import {NotificationsService} from "angular2-notifications/dist";

@Component({
    selector: 'costs-list',
    templateUrl: 'costs-list.component.html',
    styleUrls: ['costs-list.component.scss'],
    providers: [CostsService]
})
export class CostsListComponent implements OnInit {

    @Output() costDeleted = new EventEmitter<boolean>();

    costs: any = [];

    notifyOptions: any = {
        position: ["bottom", "right"],
        timeOut: 3000,
        lastOnBottom: true
    };

    constructor(private costsService: CostsService,
                private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.getCosts();
    }

    getCosts(options?: any) {
        this.costsService.getCosts(options).subscribe(
            data => {
                this.costs = data;
            },
            err => {
                console.log(err);
            }
        )
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
                    this.notificationsService.success('Успех', 'Операция удалена');
                    this.costDeleted.emit();
                },
                err => {
                    this.notificationsService.error('Ошибка', 'Удалить операцию не удалось');
                }
            );
    }
}
