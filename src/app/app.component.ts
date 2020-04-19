import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import dataAckley  from '../assets/secAckley.json';
import dataQuadric from '../assets/secQuadric.json';
import dataRastrigin from '../assets/secRastrigin.json';
import dataSpherical from '../assets/secSpherical.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Graphics';
  multi: any[];
  view: any[] = [525, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Iterations';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;
  legendPosition : String = "below";
  resultAckley = dataAckley;
  resultQuadric = dataQuadric;
  resultRastrigin = dataRastrigin;
  resultSpherical = dataSpherical;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  public data: Object[] = [
    { x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
    { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
    { x: 'HR', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] },
    { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] }
];

//Initializing Primary X Axis
public primaryXAxis: Object = {
valueType: 'Category',

};


}
