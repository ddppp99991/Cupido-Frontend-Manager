import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-withdraw-history',
    templateUrl: './withdraw-history.component.html',
    styleUrls: ['./withdraw-history.component.css']
})
export class WithdrawHistoryComponent implements OnInit {
    email: any = {
        id: '',
        email:''
    };
    constructor() { }

    ngOnInit() {
    }

    selectorBack(event){
        this.email = event[0];
    }
}
