import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import {RootService} from "../../../services/root.service";
import {AuthHttp} from "angular2-jwt";
import {DateInterval} from "../models/date-interval.model";
import {Subject} from "rxjs";
import {Response} from "@angular/http";
import _ from 'lodash';
import {CostsFilterModel} from "../../../models/costs-filter.model";

@Injectable()
export class CostsService extends RootService {
    protected restUrl: string;

    dateInterval: DateInterval;
    costsSortedProp: boolean = false;
    costsSortAttr;
    costs = [];
    originalCosts = [];

    filterAttrs = {
        amountFilterAttrs: [
            {
                label: 'По возрастанию',
                name: "amount_up"
            },
            {
                label: 'По убыванию',
                name: "amount_down"
            }
        ]
    };

    costsFilterModel: CostsFilterModel = new CostsFilterModel();

    getCostsFilterModel(): CostsFilterModel {
        return this.costsFilterModel;
    }

    setCostsFilterModel(model: CostsFilterModel) {
        this.costsFilterModel = model;
    }

    constructor(authHttp: AuthHttp) {
        super(authHttp);
        this.restUrl = 'api/costs';
        this.dateInterval = new DateInterval();
    }

    private costsFetched = new Subject<any>();
    costsFetched$ = this.costsFetched.asObservable();

    private costsSortingReset = new Subject<any>();
    costsSortingReset$ = this.costsSortingReset.asObservable();

    setDateInterval(dateInterval: DateInterval): void {
        this.dateInterval = dateInterval;
    }

    clearDateInterval(): void {
        this.dateInterval = new DateInterval();
    }

    addNewCost(item: any): Observable<boolean> {
        return this.push(item, this.restUrl);
    }

    updateCost(item: any): Observable<boolean> {
        return this.update(item, this.restUrl);
    }

    getCosts(options?: any): Observable<boolean> {
        let startDate = this.dateInterval.startDate ? this.dateInterval.startDate.toISOString() : null;
        let endDate = this.dateInterval.endDate ? this.dateInterval.endDate.toISOString() : null;
        const fetchUrl = `${this.restUrl}?startDate=${startDate}&endDate=${endDate}`;
        return this.fetch(options, fetchUrl).finally(() => this.costsFetched.next(true)).map((res: Response) => {
            this.costs = [];
            _.forEach(res, (item) => {
                this.costs.push(item);
                this.originalCosts.push(item);
            });

            if (this.costsSortedProp) {
                return this.costsSorter(this.costsSortAttr);
            }

            return this.costs;
        });
    }

    resetCostsSorter() {
        this.costsSortedProp = false;
        this.costs = _.clone(this.originalCosts);
        this.costsSortingReset.next(true);
    }

    costsSorter(sortAttr): any {
        this.costsSortedProp = true;
        this.costsSortAttr = sortAttr;

        if (sortAttr === 'amount_up') {
            this.costs.sort((a, b) => {
                if (a.amount < b.amount) {
                    return -1;
                }
                if (a.amount > b.amount) {
                    return 1;
                }
                return 0;
            });
        }

        if (sortAttr === 'amount_down') {
            this.costs.sort((a, b) => {
                if (a.amount > b.amount) {
                    return -1;
                }
                if (a.amount < b.amount) {
                    return 1;
                }
                return 0;
            });
        }

        return this.costs;
    };

    getCostsChart(options?: any): Observable<boolean> {
        return this.fetch(options, `${this.restUrl}/chart`);
    }

    getCostsStatisticByInterval(options?: any): any {
        let startDate = this.dateInterval.startDate ? this.dateInterval.startDate.toISOString() : null;
        let endDate = this.dateInterval.endDate ? this.dateInterval.endDate.toISOString() : null;
        const fetchUrl = `${this.restUrl}/statistic?startDate=${startDate}&endDate=${endDate}`;
        return this.fetch(options, fetchUrl);
    }

    deleteCost(id: string): Observable<boolean> {
        const item = {
            _id: id
        };

        return this.remove(item, `${this.restUrl}`);
    }
}
