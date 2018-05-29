import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-configuration',
    templateUrl: './user-configuration.component.html',
    styleUrls: ['./user-configuration.component.css']
})
export class UserConfigurationComponent implements OnInit {
    currentPage: any = 1;//当前页
    loading: boolean = false;
    constructor() { }

    ngOnInit() {

    }

    sizeChange(event){
        console.log(event);
        this.currentPage = event;
    }
}
