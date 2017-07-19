import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {RootService} from "./root.service";

@Injectable()
export class CostsService extends RootService {

    constructor(http: Http) {
        super(http);
    }

}
