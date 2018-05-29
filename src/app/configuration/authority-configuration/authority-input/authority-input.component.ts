import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { AuthService } from '../../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务
import { UserSafeHooks, ElTree } from 'element-angular/release/tree/tree'; //导入router服务
declare var $: any;

@Component({
    selector: 'app-authority-input',
    templateUrl: './authority-input.component.html',
    styleUrls: ['./authority-input.component.css']
})
export class AuthorityInputComponent implements OnInit {
    @Input() opennerComponent: any;//父组件

    @ViewChild('tree') tree: ElTree;
    hooks: UserSafeHooks
    defaulet: any = [];
    name;//权限名称
    description;//权限名称
    filesTree: TreeNode[];
    selectedFiles: TreeNode[] = [];
    systemMenus;// 从系统中查询出来的menu
    permission;//
    confirmType;
    data3: any = []

    constructor(private auth: AuthService, private message: ElMessageService, private route: Router) { }

    ngOnInit() {
        this.getAllMenu();
        if (this.opennerComponent.parentData != undefined) {
            this.permission = Object.assign({}, this.opennerComponent.parentData);
            this.name = this.permission.name;
            this.description = this.permission.description;
            this.confirmType = 'update';
        } else {
            this.confirmType = 'add';
        }
    }

    //查询菜单
    getAllMenu() {
        this.auth.getAllMenu().subscribe((resp) => {
            if (resp && resp.hasOwnProperty('status') && resp.status == '200') {
                this.systemMenus = resp.body;
                this.data3 = [];
                for (const data of this.systemMenus) {
                    let arr = {
                        label: data.name,
                        id: data.name,
                        children: [],
                        expanded: true,
                    }
                    for (const child of data.list) {
                        let charr = {
                            label: child.name,
                            id: child.name,
                        }
                        arr.children.push(charr);
                    }
                    this.data3.push(arr);
                }
                if (this.opennerComponent.parentData) {
                    this.defaulet = this.opennerComponent.parentData.list;
                }
            } else {
                this.message['error']('没有权限，请重新登录。');
                this.route.navigateByUrl('/');
            }
        });
    }
    confirmbefore() {
        if (!this.name || !this.description || this.tree.findAllChecked().length == 0) {
            this.message['error']('请填写完善的信息。');
            return;
        } else {
            this.confirm();
        }
    }
    confirm() {
        if (this.confirmType == 'add') {
            const payload = {
                name: this.name,
                description: this.description,
                list: this.tree.findAllChecked(),
            }
            this.auth.addPermissions(payload).subscribe((resp) => {
                if (resp && resp.hasOwnProperty('status') && resp.status == '200') {
                    this.message['success']('操作成功。');
                } else {
                    this.message['error']('操作失败。');
                }
                this.close();
                this.opennerComponent.ngOnInit();
            });
        } else if (this.confirmType == 'update') {
            const payload = {
                id: this.permission.id,
                name: this.name,
                description: this.description,
                list: this.tree.findAllChecked(),
            }
            this.auth.updatePermissions(payload).subscribe((resp) => {
                if (resp && resp.hasOwnProperty('status') && resp.status == '200') {
                    this.message['success']('操作成功。');
                } else {
                    this.message['error']('操作失败。');
                }
                this.opennerComponent.ngOnInit();
                this.close();

            });
        }

        // this.close();
    }
    //关闭弹出框
    close() {
        $('.close-button').trigger('click');
        this.opennerComponent.openAuthorityStatus = false;
    }


}
