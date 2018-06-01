import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
import { ElMessageService } from 'element-angular';
declare var $: any;
@Component({
  selector: 'app-manager-user-configuration',
  templateUrl: './manager-user-configuration.component.html',
  styleUrls: ['./manager-user-configuration.component.css']
})


export class ManagerUserConfigurationComponent implements OnInit {
    Users;
    user;
    Roles;
    Depts;
    status: boolean = false;
    type:any = "";//打开模态框的操作类型
    username;
    department;
    gender;
    station;
    telephone;
    constructor(private auth: AuthService,private message:ElMessageService) { }
    ngOnInit() {
        this.getAllUsers();
        this.getAllRoles();
        this.getAllDepts();
        // this.getAllPermissions();
    }
    getAllUsers(){
        this.auth.sendHttpGet("allUsers.do").subscribe((resp) => {
          console.log("所有后台用户",resp.body);
            this.Users = resp.body;
        })
    }
    getAllRoles(){
        this.auth.sendHttpGet("findRoles.do").subscribe((resp) => {
          console.log("所有角色",resp.body);
            this.Roles = resp.body;
        })
    }
    getAllDepts(){
      this.auth.sendHttpGet("findDepartment.do").subscribe(resp => {
        console.log("所有部门",resp.body);
        this.Depts = resp.body;
      })
    }
    getAllPermissions(){
      this.auth.sendHttpGet("findPermissions.do").subscribe()
    }
    edit(user){
        if(user){
          this.type = "编辑";
            this.user = user;
        }
        else{
          this.type = "添加"
        }
        this.status = !this.status;
    }

    search(){
      console.log("insearch",this)
    }
    reset(){
      console.log("inreset",this)
    }
    delete(user){
      this.auth.sendHttpPost("deleteUser.do",{
        id:user.id
      }).subscribe(async (res) => {
        if(res.status == 200){
          await this.getAllUsers();
          this.message["success"]("删除成功！")
        }else{
          this.message["error"]("删除失败！")
        }
      })
      console.log("indelete")
    }
}

