import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgCircleProgressModule.forRoot({
      "radius": 30,
      "space": -10,
      "unitsColor": "#4882c2" ,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 15,
      "outerStrokeColor": "#7AEE76",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "",
      "innerStrokeWidth": 10,
      "title": "",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "showImage": true,
      "clockwise": true,
      "startFromZero": false,
      "lazy": true,
      // "subtitleFormat": (percent:number): string =>{
      //   if(percent < 25){
      //     this.ngCircleOption.outerStrokeColor = "red";
      //   }
      //   else{
      //     this.ngCircleOption.outerStrokeColor = "green";
      //   }
      //   return '';
      // }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


