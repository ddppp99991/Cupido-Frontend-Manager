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
        return this.http.get(this.BASE_URL + 'isLogin.do',
        {
            observe: 'response',
            withCredentials: true,
        }).catch(e => { return Observable.of(e); })
    }

    // 系统配置---菜单管理
    //  新增菜单
    addMenu(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'addMenu.do', payload,
        {
            observe: 'response',
            withCredentials: true,
        }).catch(e => { return Observable.of(e); })
    }
    // 获取菜单
    getAllMenu(): Observable<any> {
        return this.http.get(this.BASE_URL + 'findMenu.do',
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //删除菜单
    deleteMenu(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'deleteMenu.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //删除菜单
    updateMenu(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'updateMenu.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //新增权限
    addPermissions(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'addPermissions.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //查询所有权限
    findPermissions(): Observable<any> {
        return this.http.get(this.BASE_URL + 'findPermissions.do',
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //删除权限
    deletePermissions(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'deletePermissions.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //修改权限
    updatePermissions(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'updatePermissions.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //新增角色
    addRoles(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'addRoles.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //查询所有角色
    findRoles(): Observable<any> {
        return this.http.get(this.BASE_URL + 'findRoles.do',
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //删除角色
    deleteRoles(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'deleteRoles.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    //修改角色
    updateRoles(payload): Observable<any> {
        return this.http.post(this.BASE_URL + 'updateRoles.do', payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }

    sendHttpGet(url){
        return this.http.get(this.BASE_URL + url,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
    sendHttpPost(url,payload){
        return this.http.post(this.BASE_URL + url, payload,
        {
            withCredentials: true,
            observe: 'response'
        }).catch(e => { 
         return Observable.of(e); })
    }
}
