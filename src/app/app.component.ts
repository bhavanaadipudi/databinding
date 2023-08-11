import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){      //DI

  }
  title = 'databinding concept';
  isDisabled:boolean =false;
  dynamicTxt:string='This is dynamic text';
  btnClick(){
    console.log("I was clicked");
  
  }
  TClicked(){
      this.router.navigate(['abc']);
  }
  SClicked(){
    
    this.router.navigate(['xyz']);
  }
}
