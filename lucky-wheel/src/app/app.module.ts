import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { NavComponent } from './components/nav/nav.component';
import { NgxWheelModule } from 'ngx-wheel';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WheelComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWheelModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
