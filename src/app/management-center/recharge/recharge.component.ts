import { Component, OnInit } from '@angular/core';
import { ElMessageService } from 'element-angular';
@Component({
    selector: 'app-recharge',
    templateUrl: './recharge.component.html',
    styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
    toggle: boolean = false; //确认对话框 默认不显示
    constructor(private message: ElMessageService) { }

    ngOnInit() {
    }

    recharge(){
        this.toggle = false;
        this.message['success']('充值成功！');
    }
}
