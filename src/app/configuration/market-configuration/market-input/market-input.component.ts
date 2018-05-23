import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-market-input',
    templateUrl: './market-input.component.html',
    styleUrls: ['./market-input.component.css']
})
export class MarketInputComponent implements OnInit {
    authoritys: any = [
        { value: 'Y', label: '是' },
        { value: 'N', label: '否' }
    ];
    constructor() { }

    ngOnInit() {
    }

}
