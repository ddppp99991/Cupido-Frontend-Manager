import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ElMessageService } from 'element-angular';
import { Router } from '@angular/router'; //导入router服务

declare var $: any; //引入jquery
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    menuItems: any;
    constructor(private auth: AuthService) { }

    ngOnInit() {
        this.initMenuItem();
        this.auth.sendHttpGet('getUserMenu.do').subscribe((resp)=>{
            if(resp && resp.hasOwnProperty('status') && resp.status == '200'){
                this.menuItems = resp.body;
            }
            
        });
        this.menuItems=[
            {id:'123',name: '业务处理',route:'main',child:[{id:'123',name: '业务处理',route:'menuconfig'},{id:'123',name: '业务处理',route:'main'}]},
            {id:'123',name: '业务处理',route:'main',child:[{id:'123',name: '业务处理',route:'main'},{id:'123',name: '业务处理',route:'main'}]},
        ]
    }
    menuItemClick(event){
        
        if(event.open){
            event.open = undefined;
        }else{
            event.open = 'open'
        }
    }
    initMenuItem() {
        $('.menu_a').click(function (e) {
            $(".menu_a").parent('li').removeClass('active');
            $(this).parent('li').addClass('active');
        });
    
        $('.submenu > a').click(function (e) {
            e.preventDefault();
            var submenu = $(this).siblings('ul');
            var li = $(this).parents('li');
            var submenus = $('#sidebar li.submenu ul');
            var submenus_parents = $('#sidebar li.submenu');
            if (li.hasClass('open')) {
                if (($(window).width() > 768) || ($(window).width() < 479)) {
                    submenu.slideUp();
                } else {
                    submenu.fadeOut(250);
                }
                li.removeClass('open');
            }
            else {
                if (($(window).width() > 768) || ($(window).width() < 479)) {
                    submenus.slideUp();
                    submenu.slideDown();
                } else {
                    submenus.fadeOut(250);
                    submenu.fadeIn(250);
                }
                submenus_parents.removeClass('open');
                li.addClass('open');
            }
        });
    }
    testClick(){
        console.log('event');
        
    }
}
