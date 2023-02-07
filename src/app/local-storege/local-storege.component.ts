import { Component } from '@angular/core';

@Component({
  selector: 'app-local-storege',
  templateUrl: './local-storege.component.html',
  styleUrls: ['./local-storege.component.css']
})
export class LocalStoregeComponent {
  user:any = new Array() ;


  submit(){
    alert("cheak local storege");
    this.user = {
      name:"aniket",
      city:"kerli"
    }
    console.log(this.user);


    localStorage.setItem("login data",JSON.stringify(this.user));


  }

}
