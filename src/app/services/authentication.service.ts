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

    constructor(private http: Http){
    }

    public login(name:string, password:string) {
        console.log(name, password);
        const body = 'name=' + name + '&password=' + password;
        console.log(body);

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post('http://localhost:8080/api/auth', body, {headers: headers})
            .map((res: Response) => {
                let token = res.json() && res.json().token;
                console.log(res);
                console.log(token);
            });
    }
}
