import {Component, OnInit} from "@angular/core";
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'costs-list',
    templateUrl: './costs-list.component.html',
    styleUrls: ['./costs-list.component.scss'],
    providers: [CostsService]
})
export class CostsListComponent implements OnInit{

    costs: any[] = [];

    constructor(private costsService: CostsService) {

    }

    ngOnInit() {
        this.getCosts({search: 'k'});
    }

    getCosts(options?: any) {
        this.costsService.getCosts(options).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            }
        )
    }
}
