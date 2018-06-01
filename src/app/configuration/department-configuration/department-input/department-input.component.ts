import { Component, OnInit ,Input} from '@angular/core';
import { AuthService } from '../../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务

declare var $: any;
@Component({
  selector: 'app-department-input',
  templateUrl: './department-input.component.html',
  styleUrls: ['./department-input.component.css']
})
export class DepartmentInputComponent implements OnInit {
    @Input() opennerComponent: any;//父组件
    department;
    remark;
    constructor() { }
    ngOnInit() {
      if(this.opennerComponent.type == "编辑"){
        this.department = this.opennerComponent.dept.department;
        this.remark = this.opennerComponent.dept.remark;

      }
      console.log(this.opennerComponent);
    }
    
    
    confirm(event){
      let {department,remark} = this;
      //编辑
      if(this.opennerComponent.type == "编辑"){
        this.opennerComponent.auth.sendHttpPost("updateDepartment.do",{
          id:this.opennerComponent.dept.id,
          department,
          remark
  
        }).subscribe(res => {
          if(res.status == 200){
            this.opennerComponent.message["success"]("更细信息成功");
            this.close();
            this.opennerComponent.getAllDepartments();
          }
          else{
            this.opennerComponent.message["error"]("更新信息失败");
          }
        })
      }
      //添加部门
      else{

        this.opennerComponent.auth.sendHttpPost("addDepartment.do",{
          department,
          remark
  
        }).subscribe(res => {
          if(res.status == 200){
            this.opennerComponent.message["success"]("添加成功");
            this.close();
            this.opennerComponent.getAllDepartments();
          }
          else{
            this.opennerComponent.message["error"]("添加失败");
          }
        })
      }
        
    }
    //关闭弹出框
    close(){
        $('.close-button').trigger('click');
        this.opennerComponent.openDeptModalStatus = false;
    }
}

