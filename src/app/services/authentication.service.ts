import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService{

    token: string;
    baseUrl: string;

    constructor(private http: Http){
        this.baseUrl = 'http://localhost:8080/api';
    }

    public login(name:string, password:string): Observable<any> {
        const body = 'name=' + name + '&password=' + password;
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(`${this.baseUrl}/auth`, body, {headers: headers})
            .map((res: Response) => {
                let token = res.json() && res.json().token;
                console.log(res);
                console.log(token);
            })
            .catch((error): any => {
                return Observable.throw(error);
            });

    }
}
