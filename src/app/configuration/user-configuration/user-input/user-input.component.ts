import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
    @Input() opennerComponent: any;
    status: boolean = true;
    constructor() { }

    ngOnInit() {
        console.log("this.opennerComponent.user");
        
    }

    colse() {
        //close自带了关闭模态框的功能（只是隐藏，不会将内容刷新），但是要重置userModalStatus为false（直接移除模态框，下一次重新添加到tree，实现重新加载），这样下一次点击添加才会将userModalStatus直接变为true从而出现，否则需要点击两次添加（第一次移除，第二次添加并出现）。
        //而userModalStatus的作用是为了将模态框刷新
        this.opennerComponent.edit();
    }
}
