import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionServiceModule } from 'ng-connection-service';
import { LocalStoregeComponent } from './local-storege/local-storege.component';
import { InternetCheakComponent } from './internet-cheak/internet-cheak.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    LocalStoregeComponent,
    InternetCheakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectionServiceModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

