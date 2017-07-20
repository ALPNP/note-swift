import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {RootService} from "./root.service";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class CostsService extends RootService {

    protected restUrl: string;

    constructor(authHttp: AuthHttp) {
        super(authHttp);
        this.restUrl = 'costs';
    }

    addNewCost(item: any): Observable<boolean> {
        return this.push(item, this.restUrl);
    }

    getCosts(options?: any): Observable<boolean> {
        return this.fetch(options, this.restUrl);
    }
}
