import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from '@syncfusion/ej2-ng-charts';
import { BoxAndWhiskerSeriesService, CategoryService} from '@syncfusion/ej2-ng-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [BoxAndWhiskerSeriesService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
