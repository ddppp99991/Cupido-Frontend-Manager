import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; //导入router服务
import { ElMessageService } from 'element-angular';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
    user;
    selfInfoModal:boolean = false;//显示和隐藏个人信息modal
    toggle2:boolean = false;
    constructor(private auth: AuthService, private route: Router, private message: ElMessageService) { }

    ngOnInit() {
        this.getUserInfo();
    }
    //获取当前登陆人信息
    getUserInfo(){
        this.auth.getUserInfo().subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '201'){
                this.message['error']("未登录，请先登录。");
                // this.route.navigateByUrl('/');
            }else if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                // this.message['success']("登陆成功。");
                this.user = resp.body.msg;
            }else {
                this.message['warning']("系统错误，请联系管理员。");
            }
        });
    }
    //退出登录
    logout() {
        this.toggle2 = false;
        this.auth.logout().subscribe((resp) => {
            this.route.navigateByUrl('/');
        });
    }

    //openSelfInfoModal
    openSelfInfoModal() {
        this.selfInfoModal = !this.selfInfoModal;
    }
}
