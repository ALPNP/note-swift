import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {JwtHelper, tokenNotExpired, AuthHttp} from "angular2-jwt";
import {RootService} from "./root.service";

@Injectable()
export class AuthenticationService extends RootService {

    username: string;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(protected http: Http,
                protected router: Router,
                protected authHttp: AuthHttp) {
        super(authHttp);
    }

    public login(name: string, password: string): Observable<any> {
        const body = 'name=' + name + '&password=' + password;
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(`${this.baseUrl}auth`, body, {headers: headers})
            .map((res: Response) => {
                let token = res.json() && res.json().token;
                if (token) {
                    localStorage.setItem('token', token);
                    this.setCurrentUser(token);
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error): any => {
                return Observable.throw(error);
            });
    }

    private setCurrentUser(token: string): void {
        let decodedPayload = this.jwtHelper.decodeToken(token);
        this.username = decodedPayload['_doc']['name'];
        let currentUser: any = {
            username: this.username
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    private removeCurrentUser(): void {
        this.username = null;
        localStorage.removeItem('currentUser');
    }

    public deleteAuthData(): void {
        localStorage.removeItem('token');
        this.removeCurrentUser();
    }

    public logOut() {
        this.deleteAuthData();
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        return tokenNotExpired();
    }
}
