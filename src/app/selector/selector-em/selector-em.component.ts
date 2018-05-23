import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-selector-em',
    templateUrl: './selector-em.component.html',
    styleUrls: ['./selector-em.component.css']
})
export class SelectorEmComponent implements OnInit {
    @Input() oppenercomponent: any;
    emails;//所有用户
    selected;//选中的用户
    constructor() { }

    ngOnInit() {
        this.emails = [
            {email: "1961455515@qq.com", id: "1"},
            {email: "321443242343@qq.com", id: "2"},
            {email: "321443535634534@qq.com", id: "3"},
            {email: "654345445345@qq.com", id: "4"},
            {email: "76657556754@qq.com", id: "5"},
            {email: "65436546@qq.com", id: "6"},
            {email: "877687876867@qq.com", id: "7"},
            {email: "785354354@qq.com", id: "8"},
            {email: "2354687654@qq.com", id: "9"},
            {email: "9875254354@qq.com", id: "10"},
            {email: "67845354354@qq.com", id: "11"},
            {email: "45654358576345@qq.com", id: "12"},
            {email: "654645355434@qq.com", id: "13"},
            {email: "654643545645645@qq.com", id: "14"},
            {email: "6546453542543@qq.com", id: "15"},
            {email: "654641789@qq.com", id: "16"},
            {email: "65425456@qq.com", id: "17"},
            {email: "4573213@qq.com", id: "18"},
            {email: "65434345@qq.com", id: "19"},
            {email: "85453565454@qq.com", id: "20"},
        ];
    }

    callback(){
        this.oppenercomponent.selectorBack(this.selected);
    }
    clearback(){
        this.selected = [{value:"",id:""}];
        this.oppenercomponent.selectorBack(this.selected);
    }
}
