import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PEchartsComponent } from './p-echarts/p-echarts.component';
import {AngularEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [
    AppComponent,
    PEchartsComponent
  ],
  imports: [
    BrowserModule,
    AngularEchartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
