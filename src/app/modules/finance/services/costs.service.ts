import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import {RootService} from "../../../services/root.service";
import {AuthHttp} from "angular2-jwt";
import {DateInterval} from "../models/date-interval.model";
import {Response} from "@angular/http";

@Injectable()
export class CostsService extends RootService {

    protected restUrl: string;

    constructor(authHttp: AuthHttp) {
        super(authHttp);
        this.restUrl = 'api/costs';
    }

    addNewCost(item: any): Observable<boolean> {
        return this.push(item, this.restUrl);
    }

    updateCost(item: any): Observable<boolean> {
        return this.update(item, this.restUrl);
    }

    getCosts(options?: any): Observable<boolean> {
        return this.fetch(options, this.restUrl);
    }

    getCostsChart(options?: any): Observable<boolean> {
        return this.fetch(options, `${this.restUrl}/chart`);
    }

    getCostsStatistic(options?: any): Observable<boolean> {
        return this.fetch(options, `${this.restUrl}/statistic`);
    }

    deleteCost(id: string): Observable<boolean> {
        const item = {
            _id: id
        };

        return this.remove(item, `${this.restUrl}`);
    }

    searchCostsByDateInterval(dateInterval: DateInterval): Observable<any> {
        let startDate = dateInterval.startDate ? dateInterval.startDate.toISOString() : null;
        let endDate = dateInterval.endDate ? dateInterval.endDate.toISOString() : null;

        return this.authHttp.get(`${this.baseUrl}${this.restUrl}/search?startDate=${startDate}&endDate=${endDate}`)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: any) => {
                return Observable.throw(err);
            })
            .delay(3000);
    }
}
