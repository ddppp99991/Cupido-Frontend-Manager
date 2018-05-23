import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class AuthService {
    BASE_URL = 'api/v4/';
    constructor(private http: HttpClient) { }

    //  登录
    login(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'login.do', payload,
        {
            observe: 'response',
            withCredentials: true,
        }).catch(e => { return Observable.of(e); })
    }
    //  退出登录
    logout(): Observable<any> {
        return this.http.post(this.BASE_URL + 'loginOut.do',
        {
            observe: 'response',
            withCredentials: true,
        }).catch(e => { return Observable.of(e); })
    }
    //  获取所有用户信息
    getAllUsers(): Observable<any> {
        return this.http.post(this.BASE_URL + 'allUsers.do',
        {
            observe: 'response',
            withCredentials: true,
        }).catch(e => { return Observable.of(e); })
    }
    //  获取所有用户信息
    getUserInfo(): Observable<any> {
        return this.http.post(this.BASE_URL + 'isLogin.do',
        {
            observe: 'response',
            withCredentials: true,
        }).catch(e => { return Observable.of(e); })
    }
}
