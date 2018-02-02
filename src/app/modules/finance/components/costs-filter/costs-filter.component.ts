import {Component, OnInit, OnDestroy} from '@angular/core';
import {CostsService} from "../../services/costs.service";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
    selector: 'costs-filter',
    templateUrl: 'costs-filter.component.html',
    styleUrls: ['costs-filter.component.scss']
})
export class CostsFilterComponent implements OnInit, OnDestroy {
    filterAttrs = null;
    costsFilterModel = null;
    costsFilterForm: FormGroup;

    constructor(protected costsService: CostsService) {
    }

    ngOnInit() {
        this.filterAttrs = this.costsService.filterAttrs;
        this.costsFilterModel = this.costsService.getCostsFilterModel();
        this.formInit();
    }

    formInit() {
        this.costsFilterForm = new FormGroup({
            amountSort: new FormControl(this.costsFilterModel['amountFilterAttr'])
        });
    }

    ngOnDestroy() {
        this.costsService.filterAttrs = this.filterAttrs;
        this.costsService.setCostsFilterModel(this.costsFilterModel);
    }

    amountFilterChanged(e) {
        let val = e.value;
        this.costsService.costsSorter(val);
    }
}
