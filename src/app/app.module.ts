import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createPopper } from '@popperjs/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
