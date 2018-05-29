import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务
@Component({
    selector: 'app-role-configuration',
    templateUrl: './role-configuration.component.html',
    styleUrls: ['./role-configuration.component.css']
})
export class RoleConfigurationComponent implements OnInit {
    currentPage: any = 1;//当前页
    roles;//所有的角色列表
    parentData;
    openRoleModalStatus: boolean = false;//角色编辑框打开状态
    authoritys;
    constructor(private auth: AuthService,private message: ElMessageService,private route: Router) { }

    ngOnInit() {
        this.getAllRoles();
        this.findPermissions();
    }
    getAllRoles(){
        this.auth.findRoles().subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                this.roles = resp.body;
            }else{
                this.message['error']('没有权限，请重新登录。');
                this.route.navigateByUrl('/');
            }
        });
    }
    //打开弹出框
    openRoleModal(event){
        if(event == undefined || event == null){
            this.parentData = undefined;
        }else{
            this.parentData = event;
        }
        this.openRoleModalStatus = !this.openRoleModalStatus;
    }

    findPermissions(){
        this.auth.findPermissions().subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                this.authoritys = [];
                for(const data of resp.body){
                    this.authoritys.push({id:data.id,name:data.name,description:data.description});
                }
            }else{
                this.message['error']('没有权限，请重新登录。');
                this.route.navigateByUrl('/');
            }
        });
    }
}
