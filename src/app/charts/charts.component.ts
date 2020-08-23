import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit{
  @Input() optionsOne;
  // @Input() optionsTwo;
  // @Input() optionsThree;
  // @Input() type;
  
  constructor() {
    console.log(this.optionsOne)
  }

  ngOnInit() {
    Highcharts.chart('graph-container', this.optionsOne);
  }

}