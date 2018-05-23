import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authority-input',
    templateUrl: './authority-input.component.html',
    styleUrls: ['./authority-input.component.css']
})
export class AuthorityInputComponent implements OnInit {
    name;//权限名称
    description;//权限名称
    data: any = [{
        label: '一级 1',
        children: [{
            label: '二级 1-1',
        }]
    }, {
        label: '一级 2',
        children: [{
            label: '二级 2-1',
        }]
    }, {
        label: '一级 3',
    }]
    constructor() { }

    ngOnInit() {
    }


}
