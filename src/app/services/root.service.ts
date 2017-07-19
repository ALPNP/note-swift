import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RootService {

    baseUrl: string;

    constructor(protected http: Http) {
        this.baseUrl = 'http://localhost:8080/api';
    }

    put(data) {
        console.log(data);
    }
}
