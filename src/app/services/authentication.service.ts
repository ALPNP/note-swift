import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {JwtHelper, tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthenticationService{

    username: string;
    baseUrl: string;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: Http,
                private router: Router){
        this.baseUrl = 'http://localhost:8080/api';
    }

    public login(name: string, password: string): Observable<any> {
        const body = 'name=' + name + '&password=' + password;
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(`${this.baseUrl}/auth`, body, {headers: headers})
            .map((res: Response) => {
                let token = res.json() && res.json().token;
                if (token) {
                    localStorage.setItem('token', token);
                    this.setUserName(token);
                    return true;
                } else {
                    console.log(res.json());
                    return false;
                }
            })
            .catch((error): any => {
                return Observable.throw(error);
            });
    }

    private setUserName(token: string): void {
        let decodedPayload = this.jwtHelper.decodeToken(token);
        this.username = decodedPayload['_doc']['name'];
    }

    private deleteAuthData(): void {
        this.username = null;
        localStorage.removeItem('token');
    }

    public logOut() {
        this.deleteAuthData();
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        return tokenNotExpired();
    }
}
