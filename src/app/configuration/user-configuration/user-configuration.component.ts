import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../auth.service';
@Component({
    selector: 'app-user-configuration',
    templateUrl: './user-configuration.component.html',
    styleUrls: ['./user-configuration.component.css']
})
export class UserConfigurationComponent implements OnInit {
    currentPage: any = 1;//当前页
    loading: boolean = false;
    Users;
    user;
    userModalStatus: boolean = false;
    constructor(private auth: AuthService) { }

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers(){
        this.auth.sendHttpGet("findTradeUser.do").subscribe((resp) => {
            
            this.Users = resp.body;
        })
    }
    sizeChange(event){
        console.log(event);
        this.currentPage = event;
    }

    edit(user){
        if(user){
            this.user = user;
        }
        this.userModalStatus = !this.userModalStatus;
    }
}
