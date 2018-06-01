import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务
@Component({
  selector: 'app-department-configuration',
  templateUrl: './department-configuration.component.html',
  styleUrls: ['./department-configuration.component.css']
})


export class DepartmentConfigurationComponent implements OnInit {
    Depts;
    dept;
    type;
    openDeptModalStatus: boolean = false;//角色编辑框打开状态
    constructor(private auth: AuthService,private message: ElMessageService,private route: Router) { }

    ngOnInit() {
        this.getAllDepartments();
        // this.findPermissions();
    }
    getAllDepartments(){
        this.auth.sendHttpGet("findDepartment.do").subscribe((resp) => {
            console.log("findDepartment.do",resp.body)
            this.Depts = resp.body;
        });
    }
    //打开弹出框
    edit(dept){
      this.dept = dept;
      if(dept){
        this.type = "编辑"
      }
      //新增
      else{
        this.type = "新增"

      }
      console.log("inedit")
        this.openDeptModalStatus = !this.openDeptModalStatus;
    }

    delete(dept){
      // console.log("indelete")
      // console.log(dept);
      this.auth.sendHttpPost("deleteDepartment.do",{
        id:dept.id
      }).subscribe(res => {
        if(res.status == 200){
          this.message["success"]("成功删除一条数据");
          this.getAllDepartments();

        }
        else{
          this.message["error"]("删除失败");
        }
        // console.log("删除部门返回",res);
      })
    }
    
}
