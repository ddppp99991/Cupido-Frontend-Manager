import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; //导入router服务
import { AuthService } from '../auth.service';
import {CheckboxModule} from 'primeng/checkbox';
import { ElMessageService } from 'element-angular';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    // 定义表单
    loginForm: FormGroup;
    username;
    password;
    // 表单验证不通过时显示的错误消息
    formErrors = {
        username: '',
        password: '',
    };
    // 为每一项表单验证添加说明文字
    validationMessage = {
        'username': {
            'minlength': '用户名长度最少为3个字符',
            'maxlength': '用户名长度最多为10个字符',
            'required': '请填写用户名',
            'notdown': '用户名不能以下划线开头',
            'only': '用户名只能包含数字、字母、下划线'
        },
        'password': {
            'minlength': '密码长度最少5个字符',
            'required': '请输入密码',
            
        }
    };
    // 添加 fb 属性，用来创建表单
    constructor(private fb: FormBuilder,private router: Router, private auth: AuthService,private message: ElMessageService) { }

    ngOnInit() {
        // 初始化时构建表单
        this.buildForm();
    }

    buildForm(): void {
        // 通过 formBuilder构建表单
        this.loginForm = this.fb.group({
            /* 为 username 添加3项验证规则：
             * 1.必填， 2.最大长度为10， 3.最小长度为3
            */
            'username': ['', [
                Validators.required,
            ]],
            'password': ['', [
                Validators.required,
                Validators.minLength(5),
            ]]
        });
        // 每次表单数据发生变化的时候更新错误信息
        this.loginForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        // 初始化错误信息
        this.onValueChanged();
    }

    // 每次数据发生改变时触发此方法
    onValueChanged(data?: any) {
        // 如果表单不存在则返回
        if (!this.loginForm) return;
        // 获取当前的表单
        const form = this.loginForm;

        // 遍历错误消息对象
        for (const field in this.formErrors) {
            // 清空当前的错误消息
            this.formErrors[field] = '';
            // 获取当前表单的控件
            const control = form.get(field);

            // 当前表单存在此空间控件 && 此控件没有被修改 && 此控件验证不通过
            if (control && control.dirty && !control.valid) {
                // 获取验证不通过的控件名，为了获取更详细的不通过信息
                const messages = this.validationMessage[field];
                // 遍历当前控件的错误对象，获取到验证不通过的属性
                for (const key in control.errors) {
                    // 把所有验证不通过项的说明文字拼接成错误消息
                    this.formErrors[field] += messages[key] + '\n';
                }
            }
        }
    }

    onSubmit(event) {
        if(event.status == 'VALID'){
            let payload = {
                'username': event.value.username,
                'password': event.value.password
            }
            this.auth.login(payload).subscribe((resp) => {
                console.log(resp);
                
                if (resp != null && resp != undefined && resp.status == '200') {
                    let data = resp.body;
                    localStorage.setItem('isfirstlogin', 'false');
                    //跳过验证 直接登录
                    this.message['success']("登陆成功。");
                    this.router.navigateByUrl("/workspace");
                }else if (resp != null && resp != undefined && resp.status == '504') {
                    //跳过验证 直接登录
                    this.message['error']("连接异常，请联系系统管理员。");
                }else{
                    this.message['warning']("登录失败，请检查用户名和密码。");
                }
            });
        }else{
            return;
        }
    }
}
