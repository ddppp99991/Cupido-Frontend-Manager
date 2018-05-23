import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assest-manager',
    templateUrl: './assest-manager.component.html',
    styleUrls: ['./assest-manager.component.css']
})
export class AssestManagerComponent implements OnInit {
    email;
    showByEmail: boolean = false;//选择用户邮箱后显示的内容
    currency;
    constructor() { }

    ngOnInit() {
    }

    emailChange(){
        if(this.email != undefined && this.email != "") {
            this.showByEmail = true;
        }else {
            this.showByEmail = false;
        }
    }
}
