import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-system-message-input',
    templateUrl: './system-message-input.component.html',
    styleUrls: ['./system-message-input.component.css']
})
export class SystemMessageInputComponent implements OnInit {
    content: any = "<h2><span style='color: rgb(102, 185, 102);'>您的提现已到账</span></h2>"

    constructor() { }

    ngOnInit() {
    }

}
