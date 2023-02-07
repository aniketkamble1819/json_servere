import { Component } from '@angular/core';

@Component({
  selector: 'app-internet-cheak',
  templateUrl: './internet-cheak.component.html',
  styleUrls: ['./internet-cheak.component.css']
})
export class InternetCheakComponent {
  status = "check-status";
   itConnection=true;
   


   constructor( ){}





  ngOnInit(): void {
    window.addEventListener("focus",(event)=>{
      let online = navigator.onLine;

      if( online == true)
      {
        this.status = "user is Online";
      }
      else{
        this.status = "user is ofline";
      }
    })

  }

}
