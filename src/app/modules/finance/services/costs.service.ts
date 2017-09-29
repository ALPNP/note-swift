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

@Injectable()
export class CostsService extends RootService {
    protected restUrl: string;
    dateInterval: DateInterval;

    constructor(authHttp: AuthHttp) {
        super(authHttp);
        this.restUrl = 'api/costs';
        this.dateInterval = new DateInterval();
    }

    private costsFetched = new Subject<any>();
    costsFetched$ = this.costsFetched.asObservable();

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
        const fetchUrlWithInterval = `${this.restUrl}?startDate=${startDate}&endDate=${endDate}`;

        return this.fetch(options, fetchUrlWithInterval).finally(() => {
            this.costsFetched.next(true);
        });
    }

    getCostsChart(options?: any): Observable<boolean> {
        return this.fetch(options, `${this.restUrl}/chart`);
    }

    getCostsStatistic(options?: any): Observable<boolean> {
        return this.fetch(options, `${this.restUrl}/statistic`);
    }

    getCostsStatisticByInterval(options?: any): any {
        let startDate = this.dateInterval.startDate ? this.dateInterval.startDate.toISOString() : null;
        let endDate = this.dateInterval.endDate ? this.dateInterval.endDate.toISOString() : null;
        const fetchUrlWithInterval = `${this.restUrl}/statistic?startDate=${startDate}&endDate=${endDate}`;

        return this.fetch(options, fetchUrlWithInterval).delay(1000);
    }

    deleteCost(id: string): Observable<boolean> {
        const item = {
            _id: id
        };

        return this.remove(item, `${this.restUrl}`);
    }
}
