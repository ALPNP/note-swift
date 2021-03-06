import {Injectable} from '@angular/core';
import {URLSearchParams, RequestOptions} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class RootService {

    baseUrl: string;

    constructor(protected authHttp: AuthHttp) {
        this.baseUrl = 'http://localhost:8080/';
    }

    create(item) {
        return item;
    }

    push(item: any, restUrl?: string) {
        const body = JSON.stringify(item);
        let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});

        return this.authHttp.post(`${this.baseUrl}${restUrl}`, body, {headers: headers})
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: any) => {
                return Observable.throw(err);
            });
    }

    fetch(options?: any, restUrl?: string) {
        // this code don`t work !!!!
        let searchParams: URLSearchParams = new URLSearchParams();
        for (let key in options) {
            searchParams.set(key, searchParams[key]);
        }
        //////////////////////////

        return this.authHttp.get(`${this.baseUrl}${restUrl}`, {search: searchParams})
            .map((res: Response) => {
                return res.json()['content'];
            })
            .catch((err: any) => {
                return Observable.throw(err);
            });
    }

    remove(item: any, restUrl?: string) {
        let body = JSON.stringify(item);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            headers: headers,
            body: body
        });

        return this.authHttp.delete(`${this.baseUrl}${restUrl}`, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: any) => {
                return Observable.throw(err);
            });
    }

    update(item: any, restUrl?: string) {
        let body = JSON.stringify(item);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({
            headers: headers
        });

        return this.authHttp.put(`${this.baseUrl}${restUrl}`, body, options)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err: any) => {
                return Observable.throw(err);
            })
    }
}
