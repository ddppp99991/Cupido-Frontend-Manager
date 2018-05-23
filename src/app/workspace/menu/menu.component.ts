import { Component, OnInit } from '@angular/core';
declare var $: any; //引入jquery
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.initMenuItem();
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
}
