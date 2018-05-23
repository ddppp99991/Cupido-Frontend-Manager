import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(){};
  ngOnInit(){
    document.onkeydown=function(e){  //对整个页面文档监听 
        if (e.keyCode == 86 && e.ctrlKey) {    
            alert("你按下了ctrl+V");    
        } 
        console.log(e);
        
    }
  }
}
