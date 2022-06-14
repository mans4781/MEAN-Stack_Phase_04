import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'My Counter App';

  count: number = 0;

  onClickIncrease = ()=>{
    this.count=this.count+1;
  }

  onClickDecrease = ()=>{
    this.count=this.count-1;
  }

  onClickReset = ()=>{
    this.count=0;
  }



}
