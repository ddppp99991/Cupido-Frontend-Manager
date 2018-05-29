import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务
declare var $: any;
@Component({
    selector: 'app-role-input',
    templateUrl: './role-input.component.html',
    styleUrls: ['./role-input.component.css']
})
export class RoleInputComponent implements OnInit {
    @Input() opennerComponent: any;//父组件
    name;//权限名称
    description;//权限名称
    authority;//权限
    authoritys;//权限列表
    selected;
    confirmType;
    pData;
    testshow: boolean = false;
    constructor(private auth: AuthService,private message: ElMessageService,private route: Router) { }
    ngOnInit() {
        
        
        if(this.opennerComponent.parentData != undefined){
            this.pData = Object.assign({},this.opennerComponent.parentData);
            this.name = this.pData.name;
            this.description = this.pData.description;
            this.authority = ['33ecdb46-b6b8-462d-b2c5-f360844e930f','931850e0-b14c-4646-a967-5893d84ef6ef'];
            this.confirmType = 'update';
        }else {
            this.confirmType = 'add';
        }
        this.authoritys = Object.assign([],this.opennerComponent.authoritys);
    }
    
    modelChange(event){
        this.selected = event;
    }

    confirmBefore(event){
        if (!this.name || !this.description || this.selected.length == 0) {
            this.message['error']('请填写完善的信息。');
            return;
        } else {
            this.confirm(event);
        }
    }
    confirm(event){
        if(this.confirmType == 'add') {
            const payload = {
                name: this.name,
                description: this.description,
                permissionID: this.selected
            }
            this.auth.addRoles(payload).subscribe((resp) => {
                if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                    this.message['success']('操作成功。');
                }else{
                    this.message['error']('操作失败。');
                }
                this.close();
                this.opennerComponent.ngOnInit();
            });
        }else if(this.confirmType == 'update'){
            const payload = {
                id: this.pData.id,
                name: this.name,
                description: this.description,
                permissionID: this.selected,
            }
            this.auth.updateRoles(payload).subscribe((resp) => {
                if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                    this.message['success']('操作成功。');
                }else{
                    this.message['error']('操作失败。');
                }
                this.opennerComponent.ngOnInit();
                this.close();
            });
        }
    }
    //关闭弹出框
    close(){
        $('.close-button').trigger('click');
        this.opennerComponent.openRoleModalStatus = false;
    }
}
