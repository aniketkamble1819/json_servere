import { Component, OnInit } from '@angular/core';
import { ConnectionServiceModule } from 'ng-connection-service/lib/ng-connection-service.module';
import { ConnectionService } from 'ng-connection-service/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'assigment1';





   constructor( ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }











  // loaddata(){
  //    let data:any =    localStorage.getItem("users");
  //   this.student = JSON.parse(this.user)
  // }



}
