import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务
@Component({
    selector: 'app-authority-configuration',
    templateUrl: './authority-configuration.component.html',
    styleUrls: ['./authority-configuration.component.css']
})
export class AuthorityConfigurationComponent implements OnInit {
    openAuthorityStatus: boolean = false;
    parentData;
    currentPage: any = 1;//当前页
    permissions;
    toggle: boolean = false;//确认框
    confirminfo;//确认框显示的文本内容
    currentPermission;//当前选择的权限
    constructor(private auth: AuthService,private message: ElMessageService,private route: Router) { }

    ngOnInit() {
        this.findPermissions();
    }

    sizeChange(event) {
        console.log(event);
        this.currentPage = event;
    }
    deleteBefore(event){
        this.toggle = true;
        this.confirminfo = '本次操作不可逆转，确认删除权限？';
        this.currentPermission = event;
    }
    confirm() {
        this.toggle = false;
        const payload = {
            id: this.currentPermission.id
        };
        this.auth.deletePermissions(payload).subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                this.message['success']('删除成功。');
                this.ngOnInit();
            }else{
                this.message['error']('删除失败，请重试。');
            }
        });
    }
    findPermissions(){
        this.auth.findPermissions().subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                this.permissions = resp.body;
            }else{
                this.message['error']('没有权限，请重新登录。');
                this.route.navigateByUrl('/');
            }
        });
    }
    //打开modal框
    openAuthorityModal(event) {
        if(event == undefined || event == null){
            this.parentData = undefined;
        }else{
            this.parentData = event;
        }
        this.openAuthorityStatus = !this.openAuthorityStatus;
    }
}
