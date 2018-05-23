import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-role-input',
    templateUrl: './role-input.component.html',
    styleUrls: ['./role-input.component.css']
})
export class RoleInputComponent implements OnInit {
    name;//权限名称
    description;//权限名称
    authority;//权限
    authoritys;//权限列表
    constructor() { }

    ngOnInit() {
        this.authoritys = [{value: 'hello',label: 'hello' },
        { value: 'ruby', label: 'ruby' },
        { elDisabled: true, value: 'scala', label: 'scala' },
        { value: 'javascript', label: 'javascript' },
        { value: 'java', label: 'java' }];
    }

}
