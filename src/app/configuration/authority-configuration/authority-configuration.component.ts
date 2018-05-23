import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authority-configuration',
    templateUrl: './authority-configuration.component.html',
    styleUrls: ['./authority-configuration.component.css']
})
export class AuthorityConfigurationComponent implements OnInit {

    currentPage: any = 1;//当前页
    constructor() { }

    ngOnInit() {
    }

    sizeChange(event) {
        console.log(event);
        this.currentPage = event;
    }

}
