import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { AuthService } from '../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务
@Component({
    selector: 'app-menu-configuration',
    templateUrl: './menu-configuration.component.html',
    styleUrls: ['./menu-configuration.component.css']
})
export class MenuConfigurationComponent implements OnInit {
    selected: any = {
        label:'',
        data:''
    };
    label;
    data;
    systemMenus;// 从系统中查询出来的menu
    filesTree: TreeNode[];
    selectedFiles2: TreeNode[];
    toggle: boolean = false;//确认框
    confirminfo;//确认框显示的文本内容
    toggleType;//确认框类型
    constructor(private auth: AuthService,private message: ElMessageService,private route: Router) { }

    ngOnInit() {
        this.getAllMenu();
        this.selected = {
            label:'',
            data:''
        };
    }

    nodeSelect(event) {
        console.log(event);
        this.selected = event.node;
    }

    expandRecursive(node:TreeNode, isExpand:boolean){
        node.expanded = isExpand;
        if(node.children){
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
    addMenuBefore() {
        if(this.selected.label == ""){
            this.message['error']('请先选择上级菜单。');
            return;
        }else{
            this.toggle = true;
            this.confirminfo = '确认增加菜单？';
            this.toggleType = 'add';
        }
        
    }
    //新增菜单    
    addMenu() {
        let payload;
        if(this.selected.type == 'main'){
            payload = {
                name: this.label,
                pid: "0",
                route: this.data
            }
        }else if(this.selected.type == 'firstmenu'){
            payload = {
                name: this.label,
                pid: this.selected.id,
                route: this.data
            }
        }else{
            this.message['warning']('增加失败，请先选择主菜单或一级菜单。');
            return;
        }
       
        this.auth.addMenu(payload).subscribe((resp) =>{
            if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                this.message['success']('菜单增加成功。');
                this.ngOnInit();
            }else{
                this.message['warning']('菜单增加失败。');
            }
            
        });
    }
    //查询菜单
    getAllMenu(){
        this.auth.getAllMenu().subscribe((resp) =>{
            console.log(resp);
            
            if(resp && resp.hasOwnProperty('status') && resp.status == '200') {
                this.systemMenus = resp.body;
                this.filesTree = [
                    {
                        label: "主菜单",
                        data: "main",
                        expandedIcon: "fa-folder-open",
                        collapsedIcon: "fa-folder",
                        expanded: true,
                        id:"",
                        type:"main",
                        children: []
                    }
                ];
                for(const data of this.systemMenus){
                    let arr = {
                        label: data.name,
                        data: data.route,
                        expandedIcon: "fa-folder-open",
                        collapsedIcon: "fa-folder",
                        expanded: true,
                        id:data.id,
                        pid:data.pid,
                        type:"firstmenu",
                        children: []
                    }
                    for(const child of data.list){
                        let charr = {
                            label: child.name,
                            data: child.route,
                            expandedIcon: "fa-folder-open",
                            collapsedIcon: "fa-folder",
                            id:child.id,
                            pid:child.pid,
                            type:"secondmenu",
                        }
                        arr.children.push(charr);
                    }
                    this.filesTree[0].children.push(arr);
                }
            }else {
                this.message['error']('没有权限，请重新登录。');
                this.route.navigateByUrl('/');
            }
        });
    }
    deleteMenuBefore() {
        if(this.selected.label == ""){
            this.message['error']('请选择要删除的菜单。');
            return;
        }else if(this.selected.data == "main"){
            this.message['error']('主菜单不可删除，请重新选择需要删除的菜单。');
            return;
        }else{
            this.toggle = true;
            this.confirminfo = '操作不可逆转，确认删除？';
            this.toggleType = 'delete';
        }
        
    }
    delete(){
        let payload = {
            id:this.selected.id
        };
        this.auth.deleteMenu(payload).subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '200') {
                this.message['success']('菜单删除成功。');
                this.ngOnInit();
            }else{
                this.message['warning']('菜单删除失败。');
            }
        });
    }
    updateMenuBefore() {
        if(this.selected.label == ""){
            this.message['error']('请选择需要保存的菜单。');
            return;
        }else{
            this.toggle = true;
            this.confirminfo = '确认保存？';
            this.toggleType = 'update';
        }
        
    }
    updateMenu(){
        const payload = {
            id:this.selected.id,
            name: this.selected.label,
            pid: this.selected.pid,
            route: this.selected.data
        };
        console.log(this.selected);
        console.log(payload);
        
        this.auth.updateMenu(payload).subscribe((resp) => {
            if(resp && resp.hasOwnProperty('status') && resp.status == '200') {
                this.message['success']('菜单修改成功。');
                this.ngOnInit();
            }else{
                this.message['warning']('菜单修改失败。');
            }
        });
    }
    confirm(){
        this.toggle = false;
        if(this.toggleType == 'delete') {
            this.delete();
        }
        if(this.toggleType == 'add') {
            this.addMenu();
        }
        if(this.toggleType == 'update') {
            this.updateMenu();
        }
    }

}
