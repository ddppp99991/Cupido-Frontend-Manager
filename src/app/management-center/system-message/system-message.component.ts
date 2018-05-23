import { Component, OnInit } from '@angular/core';
import { ElMessageService } from 'element-angular';
@Component({
    selector: 'app-system-message',
    templateUrl: './system-message.component.html',
    styleUrls: ['./system-message.component.css']
})
export class SystemMessageComponent implements OnInit {
    toggle: boolean = false; //确认对话框 默认不显示
    toggle2: boolean = false; //确认对话框 默认不显示
    toggleInfo; //确认对话框信息
    type;
    showBySpecific: boolean = false;//type为specific显示指定用户
    content;//消息内容
    constructor(private message: ElMessageService) { }

    ngOnInit() {
    }
    typeChange() {
        if (this.type == 'specific') {
            this.showBySpecific = true;
        } else {
            this.showBySpecific = false;
        }
    }
    beforeSendMessage() {
        this.toggle = true;
        if (this.type == 'specific') {
            this.toggleInfo = "确认向用户1961455515@qq.com发送本条消息？";
        } else {
            this.toggleInfo = "确认向所有用户发送本条消息？";
        }
    }

    sendMessage() {
        this.toggle = false;
        this.message['success']('消息发送成功！');
    }

    deleteBefore(){
        this.toggle2 = true;
    }

    delete(){
        this.toggle2 = false;
        this.message['success']('删除成功！');
    }
}
