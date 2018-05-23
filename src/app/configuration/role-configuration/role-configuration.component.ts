import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-role-configuration',
    templateUrl: './role-configuration.component.html',
    styleUrls: ['./role-configuration.component.css']
})
export class RoleConfigurationComponent implements OnInit {
    currentPage: any = 1;//当前页
    constructor() { }

    ngOnInit() {
    }

    sizeChange(event) {
        console.log(event);
        this.currentPage = event;
    }

}
