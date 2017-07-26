import {Component, OnInit} from "@angular/core";
import {CostsService} from "../../services/costs.service";

@Component({
    selector: 'costs-list',
    templateUrl: './costs-list.component.html',
    styleUrls: ['./costs-list.component.scss'],
    providers: [CostsService]
})
export class CostsListComponent implements OnInit {

    costs: any;

    constructor(private costsService: CostsService) {

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
}
