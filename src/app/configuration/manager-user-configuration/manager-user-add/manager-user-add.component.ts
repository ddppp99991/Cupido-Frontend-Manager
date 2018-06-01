
import { Component, OnInit,Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-manager-user-add',
  templateUrl: './manager-user-add.component.html',
  styleUrls: ['./manager-user-add.component.css']
})
export class ManagerUserAddComponent implements OnInit {
  @Input() opennerComponent: any;
  station: any = "Y";
  gender: any = "男";
  telephone;
  username;
  roleID;
  department;
  email;
  isPhone: boolean = false;
  isEmail: boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.opennerComponent.user){
      let user = this.opennerComponent.user;
      this.telephone = user.telephone;
      this.username = user.username;
      this.roleID = user.roleID;
      this.email = user.email;
      this.department = user.department;
      this.checkEmail();
      this.checkPhone();
    }
      // console.log(this.opennerComponent);
      
  }
  
  colse() {
    $('.close-btn').trigger('click');
      this.opennerComponent.edit();
  }
  confirm(){
    //表单验证通过
    if(this.email && this.username && this.telephone && this.department && this.roleID && this.isPhone && this.isEmail){
      console.log("填写验证通过");
      let {gender,username,department,roleID,station,telephone,email} = this;
      station = station ? "Y" : "N";
      let newuser = {
        gender,
        username,
        department,
        roleID,
        station,
        telephone,
        nickname:"nickname",
        remark:"remark",
        email
        
      };
      //添加注册
      if(this.opennerComponent.type == "添加"){
        this.opennerComponent.auth.sendHttpPost("register.do",Object.assign( newuser,{password : "admin1234"})).subscribe(async (resp) => {
          if(resp.status == 200){
            await this.opennerComponent.getAllUsers();
            this.opennerComponent.message["success"]("注册成功");
            this.colse();
          }
          else if(resp.status == 201){
            this.opennerComponent.message["error"]("用户已存在");
          }
          else if(resp.status == 202){
            this.opennerComponent.message["error"]("密码格式不正确");
          }
          else if(resp.status == 203){
            this.opennerComponent.message["error"]("邮箱格式不正确");
          }
        })

      }
      //编辑更新
      else{
        this.opennerComponent.auth.sendHttpPost("updateUser.do",Object.assign(newuser,{
          id:this.opennerComponent.user.id
        })).subscribe(async (resp) => {
          if(resp.status == 200){
            await this.opennerComponent.getAllUsers();
            this.opennerComponent.message["success"]("信息更新成功");
            this.colse();
          }
          else{
            this.opennerComponent.message["error"]("更新失败");
          }
        })
        console.log(this.opennerComponent.type)
        console.log("编辑用户信息");

      }
    }
    //表单验证不通过
    else{
      console.log(this.email , this.username , this.telephone , this.department , this.roleID , this.isPhone , this.isEmail);
      console.log("字段填写有误~");
      if(!(this.email && this.username && this.telephone && this.department && this.roleID )){
        this.opennerComponent.message["error"]("请将字段填写完整")
      }
      else if(!this.isPhone){
        this.opennerComponent.message["error"]("手机号码格式不正确");
      }
      else{
        this.opennerComponent.message["error"]("邮箱格式不正确");
      }
    }
    
  }
  checkPhone(){
    let re = /^[1][0-9]{10}$/;
    this.isPhone = re.test(this.telephone);
  }
  checkEmail(){
    let re = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    // let re = /^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$/;
    this.isEmail = re.test(this.email);
  }

}
