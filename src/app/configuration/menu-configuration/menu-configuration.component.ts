import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
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
    filesTree4: TreeNode[];
    selectedFiles2: TreeNode[];
    constructor() { }
    datas: any = [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1',
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
        }]
      }, {
        label: '一级 3',
      }]
    ngOnInit() {
        this.filesTree4 = [
            {
                label: "主菜单",
                data: "main",
                expandedIcon: "fa-folder-open",
                collapsedIcon: "fa-folder",
                expanded: true,
                children: [{
                    label: "一级菜单1",
                    data: "Backup Folder",
                    expandedIcon: "fa-folder-open",
                    collapsedIcon: "fa-folder",
                },{
                    label: "一级菜单2",
                    data: "Backup Folder",
                    expandedIcon: "fa-folder-open",
                    collapsedIcon: "fa-folder",
                },{
                    label: "一级菜单3",
                    data: "Backup Folder",
                    expandedIcon: "fa-folder-open",
                    collapsedIcon: "fa-folder",
                    expanded: true,
                    children: [{
                        label: "二级菜单1",
                        data: "Backup Folder",
                        expandedIcon: "fa-folder-open",
                        collapsedIcon: "fa-folder",
                    },{
                        label: "二级菜单2",
                        data: "Backup Folder",
                        expandedIcon: "fa-folder-open",
                        collapsedIcon: "fa-folder",
                    },{
                        label: "二级菜单3",
                        data: "Backup Folder",
                        expandedIcon: "fa-folder-open",
                        collapsedIcon: "fa-folder",
                    }]
                }]
            }
        ]
        //this.selectedFiles2 = this.filesTree4[0].children;
        // this.filesTree4.forEach( node => {
        //     this.expandRecursive(node, true);
        // } );
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

    addMenu() {
        let data = {
            label: this.label,
            data: this.data,
            expandedIcon: "fa-folder-open",
            collapsedIcon: "fa-folder",
        }
        if(this.selected.children == undefined){
            this.selected.children = [];
        }
        this.selected.expanded = true;
        this.selected.children.push(data);
    }

    deleteMenu() {
        this.deleteArr(this.selected,this.filesTree4);
    }

    deleteArr(node:TreeNode, nodes:TreeNode[]){
        if(nodes.findIndex(item => item.label === node.label) > -1) {
            nodes.splice(nodes.findIndex(item => item.label === node.label), 1)
        }
        nodes.forEach( childNode => {
            if(childNode.children){
                this.deleteArr(node,childNode.children);
            }
        } );
        
    }

}
