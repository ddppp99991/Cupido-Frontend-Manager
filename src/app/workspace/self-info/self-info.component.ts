import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-self-info',
    templateUrl: './self-info.component.html',
    styleUrls: ['./self-info.component.css']
})
export class SelfInfoComponent implements OnInit {
    @Input() user: any;
    @Input() oppener: any;
    constructor() { }

    ngOnInit() {

    }

    close(){
        this.oppener.openSelfInfoModal();
    }
}
